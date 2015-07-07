(function(){
  'use strict';

  angular
    .module('app')
    .controller('contactController', ['$http' function($http){
      var ctrl =this;

      ctrl.emailData ={
        name: '',
        email: '',
        comment: ''
      };

      ctrl.sendMail = function(data) {

        });

        // POST passing data
        $http.post('/contact', data)
          .success(function(data, status, headers, config){
            alert('thanks!')
          })
          .error(function(data, status, headers, config){
            return (status)
          })
      }
    }])
    }());