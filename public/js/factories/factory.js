(function(){
'use strict';

  angular
    .module('app')
    .factory('dataFactory', ['$http', function($http){
      var urlBase = '/api/v1/works';
      var dataFactory = {};

      dataFactory.getData = function(){
        return $http.get(urlBase);
      };
      return dataFactory;
    }])

  }());