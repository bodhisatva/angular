'use strict';

angular.module('app').controller('SecondSharingDataCtrl', ['$scope', 'Data', function($scope, Data) {
  $scope.data = Data;
}]);
