angular.module('chatrooms').controller(
  'appController',
  ['$scope', 'socket', function($scope, socket){
    $scope.$on('login:request', function(event, data){
      socket.emit('user:login', {username: data.username});
    });
    socket.on('user:login:success', function(data){
      $scope.$broadcast('login:success', {username: data.username});
    });
    socket.on('user:login:error', function(data){
      $scope.$broadcast('login:error', {username: data.username, error: data.error}); });
}]);
