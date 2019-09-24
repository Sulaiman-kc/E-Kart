const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const productSchema = new Schema({
    productId: String,
    quantity: Number,
});


const cartSchema = new Schema({
    userId: String,
    product: [productSchema],
});
Cart = mongoose.model('cart', cartSchema, 'cart');
module.exports = { Cart }