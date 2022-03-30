// const mongoose = require("mongoose");
// const { Author } = require("./models/author.model");
// const { Book } = require("./models/book.model");

// mongoose.connect("mongodb://localhost:27017/bookShop").then(() => {
//     console.log("connted to moingo db")
// })
const mongoose = require("mongoose")
const { User } = require("./models/user.model")
const { Product } = require("./models/products.model")
const { Wining } = require("./models/winning.model")
// const { Wining}=require("./models/winning.model")
mongoose.connect("mongodb://localhost:27017/ChineseAuction").then(() => {
    console.log("connect to db")
}).catch(err => console.log("errkkkkkkk"))

const AddProudact = async (item_name, item_description, price) => {
    let p = await new Product({ item_name, item_description, price })
    await p.save()
}

const AddUser = async (user_first_name, user_last_name, user_phone, arr_orders) => {
    let p = await new User({ user_first_name, user_last_name, user_phone, arr_orders })
    await p.save()
}
const addWinning = async (user_id, item_id, winingDate) => {
    let w = new Wining({ user_id, item_id, winingDate })
    await w.save()
}
const showAllUsers=async()=>{
    let arr=await User.find({})
    console.log(arr)
}
const showAllWinings=async()=>{
    let arr=await Wining.find({})
    console.log(arr)
}
const showAllProudact = async () => {
    let arr = await Product.find({})
    console.log(arr)
}
console.log("hgfggggggggggggtj")
//AddProudact("wig","nice","20")
console.log("hgfggggggggggggtj")
showAllUsers();
showAllWinings()
showAllProudact()
//addWinning("6244b0c867fd38813c28b675", "624490f38eb0b4fafe6f8760", new Date())
//console.log("hgfggggggggggggtj")


// AddUser("Naama","Frank","78676567",[
//     {_id:"624490f38eb0b4fafe6f8760",item_name:"wig" ,item_description:"nice",price:20}
//     , {item_id:"dddd",item_name:"yuyy" ,item_description:"fff",price:9},
//     {item_id:"dddd",item_name:"iuytt" ,item_description:"fff",price:9}])
// AddUser("Zipi", "Werner", "12344", [
//     { _id: "624490f38eb0b4fafe6f8760", item_name: "wig", item_description: "nice", price: 20 }
//     , { item_id: "dddd", item_name: "yuyy", item_description: "fff", price: 9 }
// ])

