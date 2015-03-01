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
      .state('about', {
        url: '/about',
        templateUrl: 'app/templates/about.html'
      })
      .state('user_profile', {
        url: '/user/:username',
        templateUrl: 'app/users/UserProfile.html',
        controller: 'usersController',
        controllerAs: 'usersCtrl'
      });
  });

  app.controller('rootController', ['$scope', '$http', '$state', function($scope, $http, $state){
    $scope.searchUsername = function(){
      $state.go('user_profile', {
        username: 'superwoman123'
      });
    };
  }]);

})();
