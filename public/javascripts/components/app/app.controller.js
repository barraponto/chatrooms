angular.module('chatrooms').controller(
  'appController',
  ['$scope', 'socket', function($scope, socket){
    $scope.$on('login:request', function(event, data){
      socket.emit('user:login', {username: data.username});
    });
    socket.on('user:login:success', function(data){ console.log(data); });
    socket.on('user:login:error', function(data){ console.log(data); });
}]);
