'use strict';

angular.module('stringScope').directive('stringDirective', function() {
  return {
    scope: {
      text: '@'
    },
    templateUrl: '/resources/templateUrl/string.directive.html'
  }
});
