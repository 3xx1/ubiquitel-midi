var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Opening Port at :3001
http.listen(3001, function() {
  console.log('[socket-server] Listening on :3001');
});

// Upon Connection
io.on('connection', function(socket) {
  // Client Connection Acq
  console.log('[socket-server] A User Connected.');

  // Remote Action Dispatcher
  socket.on('action.dispatch', function(msg) {
    console.log(msg) // このメッセージをユビキテルの子機に繋げる (todo)
    socket.broadcast.emit('action.dispatch', msg);
  });

  // Send Data Broadcast - DAW Level
  socket.on('buffer.daw.send.broadcast', function(msg) {
    socket.broadcast.emit('buffer.daw', msg);
    console.log('buffer.daw', msg);
  });

  // Send Data Broadcast - Finger Level
  socket.on('buffer.finger.send.broadcast', function(msg) {
    socket.broadcast.emit('buffer.finger', msg);
    console.log('buffer.finger', msg);
  });

  // Refreshing All Screens
  socket.on('refresh', function(msg) {
    io.emit('refresh', true);
  });
});
