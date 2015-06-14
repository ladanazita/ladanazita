
angular
  .module('myApp')
  .config(config)
  .run(run);

  function config($stateProvider, $urlRouterProvider){
    $stateProvider

      .state('home',{
        url: '/',
        title: 'Ladan Azita',
        templateUrl : 'index.html',
        controller : 'mainController',
        controllerAs: 'main'
    })
      .state('about',{
        url: '/about',
        title: 'who is she',
        templateUrl : 'templates/about.html',
        controller : 'mainController',
        controllerAs: 'main'
    })

      .state('featured',{
        url:'/featured',
        title: 'featured',
        templateUrl : 'templates/featured.html',
        controller : 'mainController',
        controllerAs: 'main'
    })

      .state('contact',{
        url:'/contact',
        title:'talk to me',
        templateUrl : 'templates/contact.html',
        controller : 'mainController',
        controllerAs: 'main'
    })

      .state('links',{
        url:'/links',
        title:'Check me out',
        templateUrl: 'templates/links.html',
        controller : 'mainController',
        controllerAs: 'main'
      });

      $urlRouteProvider.otherwise('/');
  }

  function run($rootScope, $state){
    function changeRoute(event, current, previous){
      $rootScope.title = $state.current.title;
    }

    $rootScope.$on('$stateChangeSuccess', changeRoute);

  }


