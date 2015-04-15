'use strict';

var expressionScope = angular.module('expressionScope', []);

expressionScope.controller('expressionScopeCtrl', ['$scope', function($scope) {
  $scope.expression = function(message) {
    if (message !== undefined) {
      alert(message);
    }
  }
}]);
