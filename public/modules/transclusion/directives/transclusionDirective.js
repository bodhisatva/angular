'use strict';

angular.module('transclusion', []).directive('transclusionField', function() {
  return {
    restrict: 'E',
  },
  scope: '@',
  templateUrl: '/resources/templateUrl/transclusion.directive.html',
  link: function(scope){
      scope.isContentVisible = false;

      scope.toggleContent = !scope.isContentVisible;
  }
});
