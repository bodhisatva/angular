'use strict';

angular.module('sharingData').directive('articleContent', function() {
  return {
    restrict: 'E',
    scope: {
      testString: '@'
    },
    link: function(scope, element, attrs ){
       scope.dataMessage = attrs.testString;
        console.log(scope.dataMessage);
    },
    templateUrl: '/resources/templateUrl/article-content.html'
  };
});
