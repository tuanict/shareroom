'use strict';

/* jshint -W098 */
angular.module('mean.location').controller('LocationController', ['$scope', 'Global', 'Location',
  function($scope, Global, Location) {
    $scope.global = Global;
    $scope.package = {
      name: 'location'
    };
  }
]);
