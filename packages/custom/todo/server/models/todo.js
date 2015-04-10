var mongoose = require('mongoose'),

	Schema = mongoose.Schema;


/**
*	Todo Schema
*/

var TodoSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		required: true,
		trim: true
	},
	content: {
		type: String,
		required: true,
		trim: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});


mongoose.model('Todo', TodoSchema);