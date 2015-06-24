'user strict';

angular
  .module('app', ['ui.router', 'ngResource'])
  .factory('Work', getData);

  function getData($resource){
    return $resource('data.json', {},{
      query: {method: 'GET', isArray:true}
    })
  }