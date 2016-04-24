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
          $scope.$emit('login', {username: $scope.username});
        };
        $scope.$on('login:error', function(data){
          $scope.hasError = true;
        });
      }],
      controllerAs: 'loginCtrl',
      restrict: 'E',
      templateUrl: 'javascripts/components/login/login.html'
    };
  });
