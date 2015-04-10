'use strict';

/**
*	Module dependencies
*/

var mongoose = require('mongoose'),
	Todo = mongoose.model('Todo');

exports.list = function(req, res){
	Todo.find(function(err, todos){
		if(err) return res.send(400);
		res.json(todos);
	});
};

exports.detail = function(req, res){
	 Todo.findOne({_id: req.params.todoId}, function(err, todo){
	 	if(err) return res.send(400);
	 	res.json(todo);
	 });
};

exports.create = function(req, res){
	var todo = new Todo(req.body);	
	todo.save(function(err, newTodo){
		if(err) return res.send(400);
		res.json(newTodo);
	});
};

exports.delete = function(req, res){
	Todo.findOneAndRemove({_id: req.params.todoId}, function(err){
		if(err) return res.send(400);
		res.send(200);
	});
};
