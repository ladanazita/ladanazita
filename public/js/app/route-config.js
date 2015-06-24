(function(){
  'user strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider){
    $routeProvider
      .when('featured',{
        url: '/featured',
        title: 'featured',
        templateUrl : '/js/app/works/works.html',
        controller : 'WorksController',
        controllerAs: 'vm'
    })
      .when('home',{
        url: '/',
        title: 'Ladan Azita',
        templateUrl : 'views/index.hbs',
        controller : 'mainController',
        controllerAs: 'main'
    })
      .when('about',{
        url: '/about',
        title: 'who is she',
        templateUrl : 'templates/about.hbs',
        controller : 'mainController',
        controllerAs: 'main'
    })

      .when('contact',{
        url:'/contact',
        title:'talk to me',
        templateUrl : 'templates/contact.hbs',
        controller : 'mainController',
        controllerAs: 'main'
    })

      .when('links',{
        url:'/links',
        title:'Check me out',
        templateUrl: 'templates/links.hbs',
        controller : 'mainController',
        controllerAs: 'main'
      });
  }
})();




