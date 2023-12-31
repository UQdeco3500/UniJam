const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/list.html');
  });

  app.get('/list.html', (req, res) => {
    res.sendFile(__dirname + '/list.html');
  });

  app.get('/map.html', (req, res) => {
    res.sendFile(__dirname + '/map.html');
  });

  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('book event', (msg) => {
      console.log('message: ' + msg);
      socket.broadcast.emit('book event', msg);
    });
    
  });
  
server.listen(3000, () => {
  console.log('listening on *:3000');
});

