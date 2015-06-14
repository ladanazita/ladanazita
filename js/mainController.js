'use strict';

angular
  .module('myApp')
  .controller('MainController', MainController);

  MainController.$inject = ['$http', '$state'];

  function MainController($http, $state){
    var self=this;
  }