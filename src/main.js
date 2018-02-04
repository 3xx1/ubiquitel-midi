'use strict';

var electron = require('electron');
var express = require('express');
var path = require('path');

// express server config
var server = express();
server.use(express.static('public'));
server.listen(3000, '127.0.0.1');

// electron app config
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
  mainWindow.loadURL('http://127.0.01:3000');
});
