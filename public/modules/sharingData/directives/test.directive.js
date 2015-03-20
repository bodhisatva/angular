'use strict';

angular.module('sharingData').directive('testDirective', function() {
    return {
        restrict: 'E',
        scope: {},
       /* link: function(scope, element, attr) {
            scope.data = {
                message: 'jotai'
            }
        },*/
        templateUrl: '/resources/templateUrl/test.directive.html'
    };
});
