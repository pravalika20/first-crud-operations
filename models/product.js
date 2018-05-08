const mongoose = require('mongoose');

// Product Schema
const productSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	
	brand:{
		type: String
	},
	model:{
		type: String
	},
	price:{
		type: String
	},
		image_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const product = module.exports = mongoose.model('Product', productSchema);

// Get Products
module.exports.getProducts = (callback, limit) => {
	Product.find(callback).limit(limit);
}

// Get Product
module.exports.getProductById = (id, callback) => {
	Product.findById(id, callback);
}

// Add Product
module.exports.addProduct = (product, callback) => {
	Product.create(product, callback);
}

// Update Product
module.exports.updateProduct = (id, product, options, callback) => {
	var query = {_id: id};
	var update = {
		name: product.name,
		category: product.category,
		model: product.model,
		brand: product.brand,
		price: product.price
		
	}
	Product.findOneAndUpdate(query, update, options, callback);
}

// Delete Product
module.exports.removeProduct = (id, callback) => {
	var query = {_id: id};
	Product.remove(query, callback);
}
