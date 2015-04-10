'use strict';

angular.module('mean.room').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('room example page', {
      url: '/room/example',
      templateUrl: 'room/views/index.html'
    });
  }
]);
