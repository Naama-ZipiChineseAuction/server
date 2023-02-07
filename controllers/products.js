const express = require('express')
const router = express.Router()
const { Product } = require("../models/products.model");


module.exports.getallProducts = async (req, res) => {
    let arr = await Product.find({})
    res.status(200).send(arr)
}
module.exports.deleteProduct = async (req, res) => {
    let productId = req.params.id;
    try {
        const product = await Product.findByIdAndRemove(productId)
        return res.send(product);
    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}
module.exports.getProductById = async (req, res) => {
    let productId = req.params.id;
    console.log(productId)
    let product = await Product.findById(productId)
    return res.send(product);

}
module.exports.addProduct = async (req, res) => {
    let pro = req.body;
    let product = new Product(pro)
    try {
        await product.save();
        return res.status(200).send(product);
    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}
