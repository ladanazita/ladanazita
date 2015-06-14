'use strict';

angular
  .module('myApp')
  .controller('MainController', ['$scope', '$http', function($scope, $http){
    console.log('controller loaded');
    $scope.works = [];

    $http.get('/api/v1/works')
    .then(function(result){
      $scope.work = restult.data;
    });
  }]);