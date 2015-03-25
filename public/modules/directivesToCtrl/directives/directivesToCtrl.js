'use strict';

angular.module('directivesToCtrl').directive('block', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind("click", function() {
        scope.$apply(attrs.block);
      })
    }
  }
});
