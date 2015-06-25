(function(){
  'use strict';

  angular
    .module('app')
    .controller('WorksController', WorksController);

    WorksController.$inject = ['$scope','$http'];

    function WorksController($scope, $http){
      console.log('controller loaded');
      var vm =this;

      $scope.works=[];

      $http.get('/api/v1/works')
        .then(function(result){
          vm.works = result.data
      },
      function(reason){
        console.log(reason);
      })
      .catch(function(err){
        console.log(err);
      });
    }
  }());