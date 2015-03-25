'use strict';

var directivesToCtrl = angular.module('directivesToCtrl', []);

directivesToCtrl.controller('directivesCtrl', ['$scope', function($scope) {
  $scope.showAlert = function() {
    alert('This is showAlert function from directivesCtrl');
  };
  $scope.showSecondAlert = function() {
    alert('This is showSecondAlert function from directivesCtrl');
  };

}]);
