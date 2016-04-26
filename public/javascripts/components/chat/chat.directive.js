angular.module('chatrooms').directive(
  'chat',
  function(){
    return {
      scope: {username: '@'},
      controller: ['$scope', function($scope){
        $scope.messages = [];
        this.onMessageSubmit = function($event){
          console.log($scope);
          $scope.message = '';
        };
      }],
      controllerAs: 'chatCtrl',
      restrict: 'E',
      templateUrl: 'javascripts/components/chat/chat.html'
    };
  });
