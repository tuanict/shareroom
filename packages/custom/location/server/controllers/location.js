'use strict';

/**
*	Module dependencies
*/

var mongoose = require('mongoose'),
	Province = mongoose.model('Province'),
	District = mongoose.model('District'),
	Ward = mongoose.model('Ward');


exports.createWard = function(req, res){
	var ward = new Ward(req.body);

	ward.save(function(err, newWard){
		if(err) return res.send(400);
		res.json(newWard);
	});
};

exports.detailWard = function(req, res){
	Ward.findOne({_id: req.params.wardId}, function(err, ward){
		if(err) return res.send(400);
		res.json(ward);
	});
};

exports.deleteWard = function(req, res){
	Ward.findOneAndRemove({_id: req.params.wardId}, function(err){
		if(err) return res.send(400);
		res.send(200);
	});
};

exports.updateWard = function(req, res){
	Ward.findByIdAndUpdate({_id: req.params.wardId}, req.body, function(err){
		if(err) return res.send(400);
		res.send(200);
	});
};

exports.listWardsByDistrictId = function(req, res){
	Ward.find({district: req.params.districtId}, function(err, wards){
		if (err) return res.send(400);
		res.json(wards);
	});
};

exports.deleteWardsByDistrictId = function(req, res){
	Ward.remove({district: req.params.districtId}, function(err){
		if (err) return res.send(400);
		res.send(200);
	});
};

exports.createDistrict = function(req, res){
	var district = new District(req.body);

	district.save(function(err, newDistrict){
		if(err) return res.send(400);
		res.json(newDistrict);
	});
};
exports.detailDistrict = function(req,res){
	District.findOne({_id: req.params.districtId}, function(err, district){
		if(err) return res.send(400);
		res.json(district);
	});
};
exports.deleteDistrict = function(req, res){
	Ward.remove({district: req.params.districtId}, function(err){
		if (err) return res.send(400);
		District.findOneAndRemove({_id: req.params.districtId}, function(err){
			if(err) return res.send(400);
			res.send(200);
		});
	});
	
};
exports.updateDistrict = function(req, res){
	District.findByIdAndUpdate({_id: req.params.districtId}, req.body, function(err){
		if(err) return res.send(400);
		res.send(200);
	});
};
exports.listDistrictsByProvinceId = function(req,res){
	District.find({province: req.params.provinceId}, function(err, districts){
		if (err) return res.send(400);
		res.json(districts);
	});
};
exports.deleteDistrictsProvinceIdBy = function(req, res){
	District.remove({province: req.params.provinceId}, function(err){
		if (err) return res.send(400);
		res.send(200);
	});
};


exports.createProvince = function(req, res){
	var province = new Province(req.body);

	province.save(function(err, newProvince){
		if(err) return res.send(400);
		res.json(newProvince);
	});
};

exports.detailProvince = function(req, res){
	Province.findOne({_id: req.params.provinceId}, function(err, province){
		if(err) return res.send(400);
		res.json(province);
	});
};

exports.deleteProvince = function(req, res){
	Province.findOneAndRemove({_id: req.params.provinceId}, function(err){
		if(err) return res.send(400);
		res.send(200);
	});
};
exports.listProvince = function(req, res){
	Province.find({}, function(err, provinces){
		if(err) return res.send(400);
		res.json(provinces);
	});
};
exports.updateProvince = function(req, res){
	Province.findByIdAndUpdate({_id: req.params.provinceId}, req.body, function(err){
		if(err) return res.send(400);
		res.send(200);
	});
};