'use strict';

var filters = angular.module('filters', []);

filters.controller('FirstFilterCtrl', ['$scope', 'Data',
  function($scope, Data) {
    $scope.data = Data;
  }
]);
