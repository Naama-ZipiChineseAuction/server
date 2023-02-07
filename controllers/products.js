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
        const a = await Product.findByIdAndRemove(productId)
        console.log(a);
        return res.send(a);
    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}
module.exports.getProductById = async (req, res) => {
    let productId = req.params.id;
    debugger
    console.log(productId)
        let a = await Product.findById(productId)
        return res.send(a);

}
module.exports.addProduct = async (req, res) => {
    let pro = req.body;
    let a = new Product(pro)
    try {
        await a.save();
        console.log(a)
        return res.status(200).send(a);
    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}
