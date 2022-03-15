const mongoose=require("mongoose")
const { Product}=require("./models/products.model")
const { Wining}=require("./models/winning.model")
mongoose.connect("mongodb://localhost:27017/ChineseAuction").then(()=>{
    console.log("connect to db")
}).catch(err=>console.log("errkkkkkkk"))

const AddProudact= async (item_name, item_description,price)=>{
let p=await new Product({item_name, item_description,price})
 await p.save()
}
const showAllProudact=async()=>{
let arr=await Product.find({})
 console.log(arr)
}
console.log("hgfggggggggggggtj")
AddProudact("wig","nice","20")
console.log("hgfggggggggggggtj")
showAllProudact()
console.log("hgfggggggggggggtj")