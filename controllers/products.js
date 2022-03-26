const express = require('express')
const router = express.Router()
const { Product } = require("../models/products.model");
// http://localhost:4500/items/1
router.get('/products/getById/:id', async function (req, res) {
    // put here get items from mongo db
    res.send("get produuct by id")
})

router.get('/products/getAllProducts', async function (req, res) {
    res.status(200).send("show all product")

})
router.get('/products/addProduct', async function (req, res) {
    const pAdd = req.body
    if (!pAdd) {
        res.status(400).send("product blank")
        return
    }
  let p=new Product(pAdd)
  await p.save()
  res.status(200).send("add product")

})
router.delete("", async function(req,res) {
    res.status(200).send("delete product")
})
module.exports = router;