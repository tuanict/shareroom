'use strict';

angular.module('mean.todo').factory('Todo', [ '$http',
  function($http) {
  	var _todos = [];

  	//Get list in the first time
  	$http.get('api/todos')
    	.success(function(data){
    		//_todos = data;
    		for(var i = 0; i < data.length; i+=1){
    			_todos.push(data[i]);
    		}
    	});

    return {
      name: 'todo',
      todos: _todos,
      create: function(todo, callback){
      		$http.post('/api/todos', todo)
            .success(function(data){
            	_todos.push(data);
                if(callback) callback();
            });
      }
    };
  }
]);
