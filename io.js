var io = require('socket.io')();
var _ = require('underscore');
var users = require('./users');

var usermanager = new users.UserManager();

io.on('connection', function(socket){
  socket.on('user:login', function onUserLogin(data){
    if (usermanager.addUser(data.username, socket)) {
      socket.emit('user:login:success', {username: data.username});
    } else {
      socket.emit('user:login:error', {username: data.username});
    }
  });
  socket.on('disconnect', function onDisconnect(){
    var user = usermanager.getUserBySocket(socket);
    if (user) {
      usermanager.removeUser(user);
    }
  });
});

module.exports = io;
