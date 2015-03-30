'use strict';

angular.module('isolatedScopes').directive('isolatedDirective', function (){
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/resources/templateUrl/input.directive.html'
  }
})