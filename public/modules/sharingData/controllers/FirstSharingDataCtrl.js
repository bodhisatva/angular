'use strict';

angular.module('app').controller('FirstSharingDataCtrl', ['$scope', 'Data', function($scope, Data) {
  $scope.data = Data;
}]);
