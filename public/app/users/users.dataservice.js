(function(){
  'use strict';

  angular
    .module('users')
    .factory('usersDataservice', usersDataservice);

  usersDataservice.$inject = ['$http', '$state', '$stateParams'];

  //////////////////////////

  function usersDataservice ($http, $state, $stateParams) {
    var service = {
      getUser: getUser,
      getUserGoals: getUserGoals
    };

    return service;

    //////////////////////////////////

    function getUser(){
      return $http.get('/api/user/' + $stateParams.username);
    }

    function getUserGoals(){

    }

  }

})();
