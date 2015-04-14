'use strict';

angular.module('twoWayIsolateScope').directive('binding', function(){
  return{
    scope: {
      twoWayBind: '='
    },
    templateUrl: '/resources/templateUrl/two.way.directive.html'
  }
});