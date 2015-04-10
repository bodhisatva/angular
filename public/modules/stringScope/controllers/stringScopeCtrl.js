'use strict';

var stringScope = angular.module('stringScope', []);

stringScope.controller('stringScopeCtrl', ['$scope', function($scope) {
  $scope.controllerText = "This is from parent scope"
}]);
