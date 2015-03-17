'use strict';

var filters = angular.module('filters', []);

filters.controller('FiltersInformationCtrl', ['$scope', function($scope) {
  $scope.articleInformation = {
    name: "Using custom filters",
    leading: "Text input is filtered with custom filter, producing reversed input."
  };
}]);
