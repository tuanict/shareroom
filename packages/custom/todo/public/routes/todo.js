'use strict';

angular.module('mean.todo').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
    .state('todo', {
      url: '/todo',
      templateUrl: 'todo/views/index.html'
    })
    .state('todo create',{
    	url: '/todo/create',
    	templateUrl: '/todo/views/form.html'
    });
  }
]);
