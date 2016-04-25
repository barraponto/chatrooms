var _ = require('underscore');

var User = function User(name, socket){
  this.name = name;
  this.socket = socket;
};

var UserManager = function UserManager(){
  this.users = [];
};

UserManager.prototype.getUserByName = function getUserByName(name){
  return _.findWhere(this.users, {name: name});
};

UserManager.prototype.getUserBySocket = function getUserBySocket(socket){
  return _.find(this.users, function(user){ return user.socket.id == socket.id; });
};

UserManager.prototype.addUser = function addUser(name, socket){
  if (this.getUserByName(name)) {
    return false;
  } else {
    var user = new User(name, socket);
    this.users.push(user);
    return user;
  }
};

UserManager.prototype.removeUser = function removeUser(user){
   var userIndex = this.users.indexOf(user);
   if (userIndex !== -1){
      this.users.splice(userIndex, 1);
   }
};

module.exports = {
  User: User,
  UserManager: UserManager
};
