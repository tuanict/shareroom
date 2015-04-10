'use strict';

angular.module('mean.location').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('location example page', {
      url: '/location/example',
      templateUrl: 'location/views/index.html'
    });
  }
]);
