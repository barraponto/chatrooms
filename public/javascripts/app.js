angular.module('chatrooms', ['btford.socket-io']);

angular.module('chatrooms').factory(
  'socket',
  ['socketFactory', function(socketFactory){
    return socketFactory();
}]);

angular.module('chatrooms').controller(
  'appController',
  ['$scope', 'socket', function($scope, socket){
    $scope.$on('login', function(data){
      socket.emit('user-login', data);
    });
}]);