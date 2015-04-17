'use strict';

angular.module('expressionScope').directive('expression', function (){
  return {
    scope: {
        send: '&',
        textValue: '='
    },
    templateUrl: '/resources/templateUrl/expression.html'
  }
});