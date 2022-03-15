

const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    item_name:String,
    item_description:String,
    price:Number
})

const Product=mongoose.model("products",productSchema)
module.exports={productSchema,Product}