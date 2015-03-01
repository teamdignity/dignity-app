(function(){
  'use strict';

  var app = angular.module('dignityApp', [
    'ui.router',
    'users'
  ]);

  app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/templates/home.html'
      })
      .state('user_profile', {
        url: '/user/:username',
        templateUrl: 'app/users/UserProfile.html',
        controller: 'usersController',
        controllerAs: 'usersCtrl'
      });
  });

})();
