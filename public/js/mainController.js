'use strict';

angular
  .module("app")
  .controller('MainController', ['$scope', '$http', function($scope, $http){
    console.log('controller loaded');
    $scope.works = [];

    $http.get('/api/v1/works')
    .then(function(result){
      $scope.work = result.data;
    });
  }]);