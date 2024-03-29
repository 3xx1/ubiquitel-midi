//Wi-Fi----------------------------------
char ssid[256] = "";
char password[256] = "";

//Ubiquitel Server-----------------------
String serverURL;
int serverPort;
SocketIOclient webSocket;
//Tap-------------------------------------
typedef struct Signal
{
  int ts; //Time stamp(Release point)
  char v;  //Velocity
  int sp; //Start point
} Signal;

typedef enum {
  UP,
  DOWN,
  STOP
} UbState;

UbState us = STOP;
bool stopRequest = false;
bool playRequest = false;
bool pauseUb = false;
bool muteUb = false;
long signals[2][512];
int numSignals[2] = {0, 0};
int looptime[2] = {0, 0};
int repeat[2];
int rcnt = 0;
int w = 1;
int r = 0;
int vTable[11] = {0, 8, 9, 10, 11, 12, 14, 16, 22, 30, 40};
volatile int next = 0;

bool isPlaying = false;
volatile bool tapping = false;
volatile int stepCount = 0;
int now = 0;

//Timer-----------------------------------
Ticker ticker;
unsigned long gtime = 0;
int playtime = 0;
int res = 5;

//Setup Mode------------------------------
boolean testTap = false;
boolean setupMode = true;
int pushed = 0;
unsigned long pushedTime = 0;
int testButton = 2;
