'use strict';

var isolatedScopes = angular.module('isolatedScopes', []);

isolatedScopes.controller('notIsolatedCtrl', ['$scope', function($scope) {

}]);
