  //Serial.printf("got message: %s\n", payload);
  //parseUbInfo((char *)payload);
void socketIOEvent(socketIOmessageType_t type, uint8_t * payload, size_t length) {
    switch(type) {
        case sIOtype_DISCONNECT:
            Serial.printf("[IOc] Disconnected!\n");
            break;
        case sIOtype_CONNECT:
            Serial.printf("[IOc] Connected to url: %s\n", payload);

            // join default namespace (no auto join in Socket.IO V3)
            webSocket.send(sIOtype_CONNECT, "/");
            break;
        case sIOtype_EVENT:
            Serial.printf("[IOc] get event: %s\n", payload);
            eventHandler((char *)payload);
            break;
        case sIOtype_ACK:
            Serial.printf("[IOc] get ack: %u\n", length);
            break;
        case sIOtype_ERROR:
            Serial.printf("[IOc] get error: %u\n", length);
            break;
        case sIOtype_BINARY_EVENT:
            Serial.printf("[IOc] get binary: %u\n", length);
            break;
        case sIOtype_BINARY_ACK:
            Serial.printf("[IOc] get binary ack: %u\n", length);
            break;
    }
}

void eventHandler(char* p) {
  //テスト
  JSONVar myObject = JSON.parse(p);

  if (JSON.typeof(myObject) == "undefined")
  {
    Serial.println("input parsing failed!");
  }
  if (myObject[0] == (JSONVar)"event.trigger")
  {
    signals[w][0] = gtime + (long)myObject[1]["data"][0];//ユビ振り上げ時刻
    signals[w][1] = gtime + (long)myObject[1]["data"][1];//ユビ振り下げ時刻
    numSignals[w] = 2;
    playRequest = true;
  }else if (myObject[0] == (JSONVar)"event.play")
  {
    playRequest = true;
  }else if (myObject[0] == (JSONVar)"event.set.data")
  {
    for(int i=0; i < myObject[1]["data"].length(); i++) {
      signals[w][i] = (long)myObject[1]["data"][i];//ユビ振り上げ時刻
    }
    numSignals[w] = myObject[1]["data"].length();
  }else if (myObject[0] == (JSONVar)"event.set.time")
  {
    if(JSONVar::typeof(myObject[1]["data"]) == "string") {
      String d = JSONVar::stringify(myObject[1]["data"]);
      gtime = (unsigned long)(d.substring(d.indexOf('"')+1, d.lastIndexOf('"')).toInt());
    }else if(JSONVar::typeof(myObject[1]["data"]) == "number") {
      gtime = (unsigned long)myObject[1]["data"];
    }
    Serial.println(gtime);
  }else if (myObject[0] == (JSONVar)"event.pause")
  {
    pauseUb = true;
  }else if (myObject[0] == (JSONVar)"event.set.mute")
  {
    muteUb = true;
  }else {
    Serial.println("unknown event");
  }
}

void setupSocketIO()
{
  if (fetchServerInfo()) {
    Serial.println("SocketIO connecting...");
    //webSocket.on("buffer.daw", event);
    //webSocket.on("action.dispatch", event);
    webSocket.begin(serverURL, serverPort, "/socket.io/?EIO=4");
    webSocket.onEvent(socketIOEvent);
    //webSocket.setAuthorization("ubi", "finger");
  } else {
    Serial.println("SocketIO connection failed");
  }
}

boolean parseUbInfo(const char *p)
{
  JSONVar myObject = JSON.parse(p);

  if (JSON.typeof(myObject) == "undefined")
  {
    Serial.println("Input parsing failed!");
    return false;
  }

  if (myObject.hasOwnProperty("eventType"))
  {
    if(myObject["eventType"] == (JSONVar)"FINGER__SIGNAL" &&
       myObject["buffer"]["name"] == (JSONVar)"finger2") {
      numSignals[w] = myObject["buffer"]["signal"].length();
      for(int i = 0; i < numSignals[w]; i++) {
        JSONVar t = myObject["buffer"]["signal"][i]["t"];
        signals[w][i] = (int)t/5.0;
        Serial.println((int)t);
        playRequest = true;  
      }
    }else if(myObject["eventType"] == (JSONVar)"DAW__PAUSE") {
      stopRequest = true;
    }
    return true;
  }else {
    Serial.print("fetching failed");
    return false;
  }
}
