'use strict';

var filters = angular.module('filters', []);

filters.controller('FirstFilterCtrl', ['$scope', 'Filters',
  function($scope, Filters) {
    $scope.filters = Filters;
  }
]);
