'use strict';

angular.module('expressionScope').directive('expression', function (){
  return {
    scope: {
        send: '&'
    },
    templateUrl: '/resources/templateUrl/expression.html'
  }
});