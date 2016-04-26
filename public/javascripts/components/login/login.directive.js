angular.module('chatrooms').directive(
  'login',
  function(){
    return {
      scope: {
        placeholder: '@',
        submit: '&',
      },
      controller: ['$scope', function($scope){
        this.onSubmit = function($event){
          $event.preventDefault();
          $scope.submit($scope.username);
        };
      }],
      controllerAs: 'loginCtrl',
      restrict: 'E',
      templateUrl: 'javascripts/components/login/login.html'
    };
  });
