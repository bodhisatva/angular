'use strict';

var directivesToCtrl = angular.module('directivesToCtrl', []);

directivesToCtrl.controller('DirectivesCtrl', ['$scope', '$sce', function($scope, $sce) {

  $scope.directive = {
    text: $sce.trustAsHtml('&dollar;scope.directive')
  }

  $scope.firstFunction = function() {
    $scope.directive = {
      text: $sce.trustAsHtml('firstFunction()')
    }
  }

  $scope.secondFunction = function() {
    $scope.directive = {
      text: $sce.trustAsHtml('secondFunction()')
    }
  }

}]);
