'use strict';

var expressionScope = angular.module('expressionScope', []);

expressionScope.controller('expressionScopeCtrl', ['$scope', function($scope){
  $scope.expression = function(message){
    alert(message);
  };
}]);