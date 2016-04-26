angular.module('chatrooms').controller(
  'appController',
  ['$scope', 'user', function($scope, user){
    this.loginRequest = function(username) { user.loginRequest(username); };
}]);
