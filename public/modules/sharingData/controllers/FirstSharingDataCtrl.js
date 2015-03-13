'use strict';

angular.module('sharingData').controller('FirstSharingDataCtrl', ['$scope', 'Data', function($scope, Data) {
  $scope.data = Data;
}]);
