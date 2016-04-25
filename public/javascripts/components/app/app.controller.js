angular.module('chatrooms').controller(
  'appController',
  ['$scope', 'socket', function($scope, socket){
    $scope.$on('login:request', function(event, data){
      socket.emit('user:login', {username: data.username});
    });
}]);
