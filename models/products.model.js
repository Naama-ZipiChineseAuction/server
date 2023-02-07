const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    ID: Number,
    image: String,
    
})
const Product = mongoose.model("products", productSchema)
module.exports = { productSchema, Product }