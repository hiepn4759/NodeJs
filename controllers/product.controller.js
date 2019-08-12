var Product = require('../models/product.model');


module.exports.index = async function(req, res){
	/*
	var page = parseInt(req.query.page) || 1; //n
	var perpage = 8; //x
	var start = (page - 1) * perpage;
	var end = page * perpage;

	var drop = (page - 1) * perpage;

	res.render('products/index',{
		// products: db.get('products').value().slice(start, end)
		
		products: db.get('products').drop(drop).take(perpage).value()
	});
	*/

	var products = await Product.find();
		res.render('products/index',{
			products: products
		});
};
