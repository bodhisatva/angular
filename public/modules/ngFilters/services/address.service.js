'use strict';

angular.module('ngFilters').factory('Address', function() {
  var Address = {};

  Address.list = [{
    name: "Haba",
    city: "London"
  }, {
    name: "Ann",
    city: "Stockholm"
  }, {
    name: "Milde",
    city: "Berlin"
  }, {
    name: "Henn",
    city: "Avignon"
  }, {
    name: "Gregory",
    city: "Paris"
  }, {
    name: "Marja",
    city: "Brighton"
  }]

  return Address;
});
