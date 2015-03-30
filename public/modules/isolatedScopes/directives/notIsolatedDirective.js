'use strict';

angular.module('isolatedScopes').directive('notIsolated', function() {
  return {
    restrict: 'E',
    templateUrl: '/resources/templateUrl/input.directive.html'
  }
})
