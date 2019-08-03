var db = require('../db');


module.exports.requireAuth = function(req, res, next) {
	if(!req.headers.cookie) {
		res.redirect('/auth/login');
		return;
	}

	var user = db.get('users').find({ id: req.headers.cookie}).value();

	if(user) {
		res.redirect('/auth/login');
		return;
	}
	next();
};