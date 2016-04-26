angular.module('chatrooms', ['btford.socket-io']);
angular.module('chatrooms').service('user', ['socket', function(socket){
  this.socket = socket;
  this.user = {name: 'guest', loggedIn: false};
  this.loginRequest = function(data){
    socket.emit('user:login', {username: data.username});
  };
  this.loginSuccess = function(data){
    this.user.name = data.username;
    this.user.loggedIn = true;
  };
  this.loginError = function(data){
    this.user.hasError = true;
    this.user.errorMessage = data.error;
  };
}]);
angular.module('chatrooms').service('messages', ['socket', function(socket){
}]);
