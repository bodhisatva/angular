'use strict';

angular.module('sharingData').controller('SecondSharingDataCtrl', ['$scope', 'Data', function($scope, Data) {
  $scope.data = Data;
}]);
