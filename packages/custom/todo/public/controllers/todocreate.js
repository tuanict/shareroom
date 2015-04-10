'use strict';

/* jshint -W098 */
angular.module('mean.todo').controller('TodoCreateController', ['$scope', 'Global', 'Todo', '$http', '$state',
  function($scope, Global, Todo, $http, $state) {
    $scope.todo =   {
        'title' : '',
        'content' : ''
    };

    $scope.create = function(){
        Todo.create($scope.todo, function(){
            $state.go('todo'); 
        });
    };
  }
]);
