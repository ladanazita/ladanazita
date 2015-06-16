(function(){
  'user strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider){
    $routeProvider
      .when('/featured',{
        title: 'featured',
        templateUrl : 'js/app/works/works.html',
        controller : 'WorksController',
        controllerAs: 'vm'
    });
  }
})();

