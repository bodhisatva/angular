'use strict';
var filters = angular.module('filters', []);

filters.controller('FiltersInformationCtrl', ['$scope', function($scope) {
  $scope.articleInformation = {
    name: "Filters",
    leading: "Using Filters"
  };
}]);
