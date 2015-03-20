'use strict';

angular.module('filters').controller('SecondFilterCtrl', ['$scope', 'Data',
  function($scope, Data) {
    $scope.data = Data;
  }
]);
