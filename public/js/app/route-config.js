(function(){
  'user strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('home',{
        url: '/home',
        title: 'Ladan Azita',
        templateUrl: 'templates/index.hbs'
    })
      .state('about',{
        url: '/about',
        title: 'who is she',
        templateUrl : 'templates/about.hbs'
    })
      .state('featured',{
        url: '/featured',
        title: 'featured',
        templateUrl : 'templates/featured.hbs',
        controller : 'WorksController',
        controllerAs: 'works'
    })
      .state('contact',{
        url:'/contact',
        title:'talk to me',
        templateUrl : 'templates/contact.hbs'
    });
      $urlRouterProvider.otherwise("/home");
  }
})();




