#include <WiFi.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include <ESPmDNS.h>
#include <WiFiUdp.h>
#include <ArduinoOTA.h>
#include <Ticker.h>
#include <EEPROM.h>
#include <SocketIOclient.h>//ArduinoWebsockets: https://github.com/Links2004/arduinoWebSockets
#include <WebSocketsClient.h>//ArduinoWebsockets: https://github.com/Links2004/arduinoWebSockets
#include <Arduino_JSON.h>
#include <WiFiClientSecure.h>
#include <HTTPClient.h>
#include "ub.h"

//IO
const int inA = 5;
const int inB = 17;
const int PoS = 4;
const int dock = 13;
const int Vs2B = 15;
const int LED = 16;

void setup()
{
  setupEEPROM();
  setupOTA();
  setupSocketIO();

  pinMode(inA, OUTPUT);
  pinMode(inB, OUTPUT);
  pinMode(dock, INPUT_PULLUP);
  pinMode(PoS, OUTPUT);
  pinMode(Vs2B, OUTPUT);
  pinMode(LED, OUTPUT);
  pinMode(testButton, INPUT_PULLUP);

  digitalWrite(inA, LOW);
  digitalWrite(inB, LOW);
  digitalWrite(Vs2B, LOW);
  digitalWrite(PoS, HIGH);
  digitalWrite(LED, LOW);

  ticker.attach(0.005, timer);
}

void loop()
{
  if (!setupMode)
  {
    ArduinoOTA.handle();
  }
  webSocket.loop();
  checkSetupMode();
}
