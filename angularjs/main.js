var mainApp = angular.module("mainApp", ['ngRoute']);

  mainApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
     
    when('/api_checker', {
       templateUrl: 'api_checker',
       controller: 'ApiCheckerController'
    }).
    
    when('/json_formatter', {
       templateUrl: 'json_formatter',
       controller: 'JsonFormatterController'
    }).
     
    otherwise({
       //redirectTo: '/addStudent'
    });
  }]);

mainApp.controller('ApiCheckerController', function($scope) {
  console.log($scope);
});

mainApp.controller('JsonFormatterController', function($scope) {
  console.log($scope);
});