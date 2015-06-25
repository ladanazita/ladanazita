(function(){
  'use strict';

  angular
    .module('app')
    .controller('WorksController', WorksController);

    WorksController.$inject = ['$scope','dataFactory'];

    function WorksController($scope, dataFactory){
      console.log('controller loaded');
      var vm =this;
      console.log(dataFactory);
      $scope.status;
      $scope.works;

      getData();

      function getData(){
        dataFactory.getData()
        .success(function(data){
          vm.works = data;
          console.log(data);
        })
        .error(function(error){
          $scope.status = "Unable to load project data: "+ error.message;
        });
      }

    }
  }());