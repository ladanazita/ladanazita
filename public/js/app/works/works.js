(function(){
  'use strict';

  angular
    .module('app')
    .controller('WorksController', WorksController);

    WorksController.$inject = ['$http'];

    function WorksController($http){
      var vm =this;

      $http.get('/seeds/data.json')
      .then(function(response){
        vm.works = response.data
      },
      function(reason){
        console.log(reason);
      })
      .catch(function(err){
        console.log(err);
      });
    }
}());