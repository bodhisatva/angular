'use strict'
angular.module('app', [
    'ui.router',
    'sharingData',
    'filters',
    'ngFilters',
    'directivesToCtrl',
    'isolatedScopes',
    'stringScope',
    'twoWayIsolateScope',
    'expressionScope'
  ])
  //For directivesCtrlconfiguring providers
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'modules/core/views/home.container.html',
      });
  }]);
