'use strict';

/**
*	Module dependencies
*/

var mongoose = require('mongoose'),
	Room = mongoose.model('Room');

exports.list = function(req, res){
	Room.find(function(err, rooms){
		if(err) return res.send(400);
		res.json(rooms);
	});
};

exports.detail = function(req, res){
	 Room.findOne({_id: req.params.roomId}, function(err, room){
	 	if(err) return res.send(400);
	 	res.json(room);
	 });
};

exports.create = function(req, res){
	console.log(req.body);
	var room = new Room(req.body);

	room.save(function(err, newRoom){
		// if(err) console.log(err);
		if(err) return res.send(400);
		res.json(newRoom);
	});
};

exports.delete = function(req, res){
	 Room.findOneAndRemove({_id: req.params.roomId}, function(err){
	 	if(err) return res.send(400);
	 	res.send(200);
	 });
};

exports.update = function(req, res){
	Room.findByIdAndUpdate({_id: req.params.roomId}, req.body, function(err){
		if(err) console.log('Fail');
	 	if(err) return res.send(400);
	 	res.send(200);
	 	console.log('Done!');
	 });
};
