// TODO: MAKE SOME ROUTES
angular.module("finalAssessment").config(["$routeProvider", function($routeProvider) {
  $routeProvider.when('/', {
    template: '<app-login />',
  });
  $routeProvider.when('/profile-view', {
    template: '<profile-view />',
  });


}]);
