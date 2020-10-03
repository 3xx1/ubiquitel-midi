void event(const char *payload, size_t length)
{
  Serial.printf("got message: %s\n", payload);
  parseUbInfo(payload);
}

void setupSocketIO()
{
  if (fetchServerInfo()) {
    webSocket.on("buffer.daw", event);
    webSocket.on("action.dispatch", event);
    webSocket.begin(serverURL.c_str(), serverPort);
  } else {
    Serial.println("SocketIO connection failed");
  }
}

boolean parseUbInfo(const char *p)
{
  JSONVar myObject = JSON.parse(p);

  if (JSON.typeof(myObject) == "undefined")
  {
    Serial.println("Parsing input failed!");
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
