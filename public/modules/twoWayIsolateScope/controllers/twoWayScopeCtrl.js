'use strict';

var twoWayScope = angular.module('twoWayIsolateScope', []);

twoWayScope.controller('twoWayIsolateScopeCtrl',['$scope', function($scope){
  $scope.parentBinding = "Let´s share ideas!"
}]);
