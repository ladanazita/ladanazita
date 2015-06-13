'use strict';

var myApp= angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

$routeProvider
  .when('/',{
    templateUrl : 'index.html',
    controller : 'mainController',
    controllerAs: 'main'
  })

  .when('/about',{
    templateUrl : 'templates/about.html',
    controller : 'mainController',
    controllerAs: 'main'
  })

  .when('/featured',{
    templateUrl : 'templates/featured.html',
    controller : 'mainController',
    controllerAs: 'main'
  })

  .when('/contact',{
    templateUrl : 'templates/contact.html',
    controller : 'mainController',
    controllerAs: 'main'
  })

  .otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true);
}])

.controller('MainController', ['$route','$routeParams','$location' function($route, $routeParams, $location){
  this.$route=$route;
  this.$location=$location;
  this.$routeParams=$routeParams;
}])

