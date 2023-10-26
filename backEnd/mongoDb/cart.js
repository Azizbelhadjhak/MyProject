const mongoose = require("mongoose");
mongoose.Promise = global.Promise;


const cartSchema = new mongoose.Schema({
    name: String,
    price:Number,
    productId : String
  });
  
const Cart = mongoose.model("Cart",cartSchema);

module.exports = Cart;