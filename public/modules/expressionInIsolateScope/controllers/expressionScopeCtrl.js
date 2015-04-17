'use strict';

var expressionScope = angular.module('expressionScope', []);

expressionScope.controller('expressionScopeCtrl', ['$scope', function($scope) {

  $scope.alerts = [];

  $scope.expression = function(message) {

    if (message !== undefined) {
     console.log(message);
      $scope.alerts.push({
        type: 'danger',
        msg: message
      });

      $scope.textValue = "";

    }
  }

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  }

}]);
