'use strict';

/* jshint -W098 */
angular.module('mean.room').controller('RoomController', ['$scope', 'Global', 'Room',
  function($scope, Global, Room) {
    $scope.global = Global;
    $scope.package = {
      name: 'room'
    };
  }
]);
