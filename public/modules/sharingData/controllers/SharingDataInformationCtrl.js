'use strict';

var sharingData = angular.module('sharingData',[]);

sharingData.controller('SharingDataInformationCtrl', ['$scope', function($scope) {

  $scope.articleInformation = {
    name: "Sharing data with Factories",
    leading: "Sharing same data with two separate controllers without scope inheritance. Sharing is done by using factory service."
  }
}]);
