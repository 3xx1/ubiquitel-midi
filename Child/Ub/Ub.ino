#include <ESP8266WiFi.h>
#include <ESP8266mDNS.h>
#include <WiFiUdp.h>
#include <ArduinoOTA.h>
#include <Ticker.h>
#include "ub.h"

//IO
const int inA = 4;
const int inB = 5;
const int PS = 12;
const int dock = 13;
const int Vs2B = 14;
const int LED = 16;

Ticker ticker;

void setup() {
  setupOTA();
  
  pinMode(inA, OUTPUT);
  pinMode(inB, OUTPUT);
  pinMode(dock, INPUT_PULLUP);
  pinMode(PS, OUTPUT);
  pinMode(Vs2B, OUTPUT);
  pinMode(LED, OUTPUT);
  
  digitalWrite(inA, LOW);
  digitalWrite(inB, LOW);
  digitalWrite(Vs2B, LOW);
  digitalWrite(PS, HIGH);
  digitalWrite(LED, HIGH);
  
  ticker.attach(0.005, timer);
  udp.begin(6340);
  for(int i=0;i<2;i++) {
    numTaps[i] = 0;
    looptime[i] = 0;
  }
}

void loop() {
  ArduinoOTA.handle();
  parsePacket();
}

//タイマ割り込み
void timer() {
  waitForConfirmation();
  if(gtime%100==0) checkDock();
  if(isPlaying) stepTime();
  gtime++;
  if(gtime == playtime) {
    packet[1] = -1;
    playUb();
  }

}
