(function(){
  'use strict';

  angular
    .module('users')
    .controller('userPayment', userPayment);

  userPayment.$inject = ['$scope'];

  //////////////////////////

  function userPayment($scope){
    $scope.showAmount = false;
    $scope.showOther = false;
    $scope.showForm = false;
  }

})();
