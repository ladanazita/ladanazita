(function(){
  'use strict';

  angular
    .module('app')
    .controller('WorksController', WorksController);

    WorksController.$inject = ['$scope','dataFactory'];

    function WorksController($scope, dataFactory){
      console.log('controller loaded');
      var vm =this;

      $scope.status;
      $scope.works;

      getData();

      function getData(){
        dataFactory.getData()
        .success(function(data){
          $scope.works = data;
        })
        .error(function(error){
          $scope.status = "Unable to load project data: "+ error.message;
        });
      }

    }
  }());