'use strict';

/* jshint -W098 */
angular.module('mean.todo').controller('TodoController', ['$scope', 'Global', 'Todo', '$http', '$state',
  function($scope, Global, TodoService, $http, $state) {
    $scope.global = Global;
    $scope.package = {
      name: 'todo'
    };

    $scope.todos = TodoService.todos;

    //Get all todo
    /*$scope.getTodos = function(){
    	
    };*/
    //Go to create page
    $scope.createTodo = function(){
    	$state.go('todo create');
    };
    /*$scope.getTodos();*/
  }
]);
