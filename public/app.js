'use strict'
angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'sharingData',
    'filters',
    'ngFilters',
    'directivesToCtrl',
    'isolatedScopes',
    'stringScope',
    'twoWayIsolateScope',
    'expressionScope',
    'transclusion'
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
