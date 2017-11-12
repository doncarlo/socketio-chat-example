var app = require('express')(); //this is a function handler that gets passed into a http Server object below
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  //res.send('<h1>Hello Andrea, te amo muito!</h1>');
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});