//セットアップモードには、ホームルーターに接続できない時、またはボタン長押しで切り替わる。
//セットアップモードでは、ホームルーターのSSID、パスワードを設定できる（PCのブラウザで192.168.4.1にアクセス）。
//また、ボタンで指のテスト動作ができる。
void checkTestTap()
{
  if (!digitalRead(testButton) && !testTap && setupMode) {
    testTap = true;
    Serial.println("Tapping!");
  }
  if (testTap) {
    if (gtime < 32) {
      stepMotor();
      gtime++;
    }
    else if (gtime < 45) {
      stopMotor();
      gtime++;
    } else {
      gtime = 0;
      testTap = false;
    }
  }
}

void checkSetupMode()
{
  if (!digitalRead(testButton) && !setupMode) {
    if (!pushed) {
      pushedTime = millis();
      pushed = true;
    } else if ((millis() - pushedTime) > 2000) {
      setupMode = true;
      setupServer();
    }
  } else if (setupMode) {
    loopServer();
  } else {
    pushed = false;
  }
}
