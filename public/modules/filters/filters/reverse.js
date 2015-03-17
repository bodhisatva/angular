'use strict';

angular.module('filters').filter('reverse', function() {
  //returns reversed user input
  return function(text) {
    return text.split("").reverse().join("");
  };
});
