'use strict';

angular.module('transclusion', []).directive('transclusionField', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      title: '@'
    },
    templateUrl: '/resources/templateUrl/transclusion.directive.html',
    link: function(scope) {
      scope.isContentVisible = false;

      scope.toggleContent = function() {
        scope.isContentVisible = !scope.isContentVisible;
      }

    }
  }
});
