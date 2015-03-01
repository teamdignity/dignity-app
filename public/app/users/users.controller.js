(function(){
  'use strict';

  angular
    .module('users')
    .controller('usersController', usersController);

  usersController.$inject = ['$scope', 'usersDataservice'];

  //////////////////////////

  function usersController($scope, usersDataservice){

    usersDataservice.getUser().then(function(data, status, headers, config){
      $scope.data = data.data;
    });

  }

})();
