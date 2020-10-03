//タイマ割り込み
void timer()
{
  updateUbState();
  driveMotor();
  checkTestTap();
}
