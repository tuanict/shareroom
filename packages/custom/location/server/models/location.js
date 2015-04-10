var mongoose = require('mongoose'),

	Schema = mongoose.Schema;


/**
*	Province Schema
*/

var ProvinceSchema = new Schema({
	name: String,
	zipcode: String
});


mongoose.model('Province', ProvinceSchema);

/**
*	DistrictSchema
*/

var DistrictSchema = new Schema({
	name: String,
	zipcode: String,
	provice:{
		type: Schema.ObjectId,
		ref: 'Province'
	}
});


mongoose.model('District', DistrictSchema);

/**
*	Ward Schema
*/

var WardSchema = new Schema({
	name: String,
	zipcode: String,
	district:{
		type: Schema.ObjectId,
		ref: 'District'
	},
	coordinates: {
		lattitude: Number,
		longittude: Number
	}
});


mongoose.model('Ward', WardSchema);