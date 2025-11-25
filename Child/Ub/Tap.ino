String ack_playChanged = "[\"event.ack.playChanged\",{ \"isPlaying\": true }]";
String ack_pauseChanged = "[\"event.ack.playChanged\",{ \"isPlaying\": false }]";
String ack_bufferUpdated = "[\"event.ack.bufferUpdated\",\"\"]";
String ack_playDone = "[\"event.ack.playDone\",\"\"]";

void updateUbState() {
  if(stopRequest) {
    stop();
  }
  if(playRequest) {
    play();
  }
  if((us == DOWN || us == UP) && !pauseUb) {
    stepForward();
  }
}

void stepForward() {
  if(signals[r][next] == gtime) {
    //上げ下ろしの動作切り替え
    upDown();
  }
  //ユビ振り上げ中、待機中はステップ数をインクリメント
  gtime++;
}

//上げ下ろしの動作切り替え
void upDown() {
  if(us == DOWN) {
    up();
  }else if(us == UP) {
    down();
  }
  next++;
  //バッファ内を全て再生し、次のバッファにデータがあったらバッファ切り替え
  if(next == numSignals[r]) {
    if(numSignals[w] > 0) {
      swapBuffer();
    }else {//バッファが空なら停止
      webSocket.sendEVENT(ack_playDone);//ACK送信

      stop();
      Serial.println("buffer empty, stopped.");
    }
  }
}

void stop() {
  us = STOP;
  gtime = 0;
  next = 0;
  stepCount = 0;
  stopRequest = false;
  pauseUb = false;

  webSocket.sendEVENT(ack_pauseChanged);//ACK送信
}

void play() {
  if(numSignals[w] > 0 && us == STOP) {
    swapBuffer();
    down();
    webSocket.sendEVENT(ack_playChanged);//ACK送信
  }else if(us != STOP && pauseUb) {
    pauseUb = false;
    webSocket.sendEVENT(ack_playChanged);//ACK送信
  }else if(numSignals[w] == 0) {
    Serial.println("buffer empty, play failed.");
    webSocket.sendEVENT(ack_pauseChanged);//ACK送信    
  }
  playRequest = false;
}

void up() {
  us = UP;
  Serial.println("up.");
}

void down() {
  us = DOWN;
  Serial.println("down.");
}

void swapBuffer() {
  for(int i = 0; i < 512; i++) {
    signals[r][i] = 0;
  }
  numSignals[r] = 0;
  next = 0;
  r = (r+1)%2;
  w = (w+1)%2;

  while(signals[r][next] < 0) {
    next += 2;
  }

  webSocket.sendEVENT(ack_bufferUpdated);//ACK送信
}

void driveMotor() {
  if(us == DOWN || us == STOP || muteUb) {
    stopMotor();
  }else if(us == UP) {
    stepMotor();
  }
}

void stepMotor()
{
    digitalWrite(Vs2B, HIGH);
    digitalWrite(PoS, LOW);
    digitalWrite(LED, HIGH);
    switch (stepCount) {
      case 0:    // 00
        digitalWrite(inA, LOW);
        digitalWrite(inB, LOW);
        break;
      case 1:    // 10
        digitalWrite(inA, LOW);
        digitalWrite(inB, HIGH);
        break;
      case 2:    //11
        digitalWrite(inA, HIGH);
        digitalWrite(inB, HIGH);
        break;
      case 3:    //01
        digitalWrite(inA, HIGH);
        digitalWrite(inB, LOW);
        break;
    }
    stepCount = ++stepCount%4;
}

void stopMotor() {
    digitalWrite(PoS, HIGH);
    digitalWrite(Vs2B, LOW);
    digitalWrite(LED, LOW);
}

/*
void syncUb() {
  gtime = 0;
  playtime = 100;
  //stopUb();
}

void playUb() {
  if(numTaps[r] == 0) {
    isPlaying = false;
    if(numTaps[(r+1)%2]) {
      r = (r+1)%2;
      resetTaps();
      w = r;
    }
    return;
  }
  //タイマー再生機能
  if(packet[1]/res>gtime) {
    playtime = (int)packet[1]/res;
    return;
  }
  if(!isPlaying) {
    now = looptime[r]-40;
    rcnt = repeat[r];
    
    isPlaying = true;
      Serial.println("ts");
    for(int i=0;i<numTaps[r];i++) {
      Serial.println(taps[r][i].sp);
    }
  }
  Serial.println("play UB!");
  playtime = -1;
}

void pauseUb() {
  if(isPlaying) isPlaying =false;
}

void stopUb() {
  Serial.println("stop");
  if(isPlaying) isPlaying =false;
  stopMotor();
  next = 0;
  tapping = false;
  stepCount = 0;
}

void stepTime() {
    //タップ始動処理
    if(next < numTaps[r]) {
      if(taps[r][next].sp == now && numTaps[r] > 0){
        tapping = true;
        Serial.print("gtimePrepare, ");
        Serial.println(gtime);
      }
    }
    
    //ユビ振り上げ中の処理
    if(tapping) {
        //ユビリリース処理
        if(stepCount == taps[r][next].v) {
            Serial.print("gtimeRelease, ");
            Serial.println(gtime);

            tapping = false;
            stepCount = 0;
            stopMotor();
            if(next < numTaps[r]) next++;
        }
        else {
          stepMotor();
          stepCount++;
        }
    }
    
    now = now+1;
    if(now == looptime[r]) {now = 0;Serial.println("now is 0!");Serial.println(looptime[r]);}
    
    //全タップ再生後、次のデータ待ち処理
    if((next == numTaps[r]) && (now >= looptime[r]-41)) {
      next = 0;
      if(rcnt == 1) {//ループ回数残り1回のとき
        if(numTaps[(r+1)%2]>0) {//次のバッファにデータがあるとき
          rcnt = repeat[(r+1)%2];//リピート回数設定
          now = now + looptime[(r+1)%2] - looptime[r];//再生位置移動
          resetTaps();
          Serial.print("played!");Serial.println(gtime);
        }else{
          stopUb();//次のバッファにデータがなければ停止
        }
      }else if(rcnt == 0) {
        if(numTaps[(r+1)%2] > 0) {
          rcnt = repeat[(r+1)%2];//リピート回数設定
          now = now + looptime[(r+1)%2] - looptime[r];//再生位置移動
          resetTaps(); 
        }
      }else if(rcnt > 1) rcnt--;
    }
}
*/
