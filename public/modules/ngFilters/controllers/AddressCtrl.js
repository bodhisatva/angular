'use strict';

var ngFilters = angular.module('ngFilters', []);

ngFilters.controller('AdressCtrl', ['$scope', 'Address', function($scope, Address) {
  $scope.address = Address;
}]);
