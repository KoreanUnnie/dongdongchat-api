#!/usr/bin/env node
require('dotenv').config();
var app = require('http').createServer()
var io = module.exports.io = require('socket.io')(app);
var appInfo = require('../../package.json');

const PORT = process.env.SOCKET_PORT || 3231
const SocketManager = require('./SocketManager')

io.on('connection', SocketManager);

console.log(`Starting ${appInfo.name}`);

app.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});
