'use strict';

angular.module('filters').controller('SecondFilterCtrl', ['$scope', 'Filters',
  function($scope, Filters) {
    $scope.filters = Filters;
  }
]);
