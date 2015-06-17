'user strict';

angular
  .module('app', ['ngRoute', 'ngResource'])
  .factory('Work', getData)
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.otherwise({redirectTo: '/'})
  }]);

  function getData($resource){
    return $resource('data.json', {},{
      query: {method: 'GET', isArray:true}
    });