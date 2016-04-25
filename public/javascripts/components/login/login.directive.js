angular.module('chatrooms').directive(
  'login',
  function(){
    return {
      scope: {
        placeholder: '@placeholder'
      },
      controller: ['$scope', function($scope){
        this.onSubmit = function($event){
          $event.preventDefault();
          $scope.$emit('login:request', {username: $scope.username});
        };
        $scope.$on('login:success', function(event, data){
          $scope.loggedIn = true;
        });
        $scope.$on('login:error', function(event, data){
          $scope.hasError = true;
          $scope.errorMessage = data.error;
        });
      }],
      controllerAs: 'loginCtrl',
      restrict: 'E',
      templateUrl: 'javascripts/components/login/login.html'
    };
  });
