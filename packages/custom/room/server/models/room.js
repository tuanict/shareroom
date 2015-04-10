var mongoose = require('mongoose'),

	Schema = mongoose.Schema;


/**
*	Todo Schema
*/

var RoomSchema = new Schema({
	isConfirmed: {
		type: Boolean,
		required: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	propety: {
		
		rentPerMonth: {
			type: Number,
			required: true,
			trim: true
		},
		utinitiesCost:{
			type: Number,
			required: true,
			trim: true
		},
		area:{
			type: Number,
			required: true,
			trim: true
		},
		streetName: {
			type: String,
			required: true,
			trim: true
		},
		houseNumber: {
			type: String,
			required: true,
			trim: true
		},
		coordinates: {
			lattitude: Number,
			longittude: Number
		},
		
		state:{
			type: String,
			enum: ['full','o_ghep','cho_thue'],
			required: true
		},
		numberPerRoom:{
			type: Number,
			required: true,
			min: 1
		}
	},
	apartment:{
		availableFrom:{
			type: Date,
			required: true
		},
		minimumStay:{
			type: Number,
			required: true
		},
		roomType: {
			type: String,
			enum: ['nha_cap_4','nha_tang', 'chung_cu'],
			required: true
		},
		images:[{
			url: String,
			note: String
		}]
	},
	amentities:{
		gancho:Boolean,
		ganCongVien:Boolean,
		matDuong:Boolean,
		phongNgu:Boolean,
		banCong:Boolean,
		tuQuanAo:Boolean,
		dieuHoa:Boolean,
		sanPhoiQuanAo:Boolean,
		phongMoiXay:Boolean,
		loiDiRieng:Boolean,
		choDeXeRieng:Boolean,
		capTruyenHinh:Boolean,
		internet:Boolean,
		tivi:Boolean,
		gioGiacTuDo:Boolean,
		canDatCoc:Boolean,
		yenTinh:Boolean,
		anNinh:Boolean,
		choNauAn:Boolean,
		phongTam:Boolean,
		oCungChuNha:Boolean
	}
});


mongoose.model('Room', RoomSchema);