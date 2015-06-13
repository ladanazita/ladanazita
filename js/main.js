'use strict';

var myApp= angular.module('myApp', ['ngResource']);

myApp.config(['$routeProvider', function($routeProvider){

$routeProvider
  .when('/',{
    templateUrl : 'index.html',
    controller : 'mainController'
  })

  .when('/about',{
    templateUrl : 'templates/about.html',
    controller : 'mainController'
  })

  .when('/featured',{
    templateUrl : 'templates/featured.html',
    controller : 'mainController'
  })

  .when('/contact',{
    templateUrl : 'templates/contact.html',
    controller : 'mainController'
  })

  .otherwise({redirectTo: '/'});
}]);
