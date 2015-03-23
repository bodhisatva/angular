'use strict';

var sharingData = angular.module('sharingData', []);

sharingData.controller('FirstSharingDataCtrl', ['$scope', 'Data', function($scope, Data) {
  $scope.data = Data;
}]);
