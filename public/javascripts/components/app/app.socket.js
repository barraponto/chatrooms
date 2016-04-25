angular.module('chatrooms').factory(
  'socket',
  ['socketFactory', function(socketFactory){
    return socketFactory();
}]);
