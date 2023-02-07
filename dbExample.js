
const mongoose = require("mongoose")
const { User } = require("./models/user.model")
const { Product } = require("./models/products.model")
const { Wining } = require("./models/winning.model")
mongoose.connect("mongodb://localhost:27017/ChineseAuctionnzz").then(() => {
    console.log("connect to db")
}).catch(err => console.log("errkkkkkkk"))


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
const AddProudact = async (ID,description,name, image, price,isSelected) => {
    let p = await new Product({ ID,description,name, image, price,isSelected})
    await p.save()
}
// AddProudact(1,"חדר ילדים","ארון, מיטה, שידה","/images/room.jpg",20,false)
// AddProudact(1,"חדר ילדים","ארון, מיטה, שידה","/images/room.jpg",20,false)
// AddProudact(3,"מזגן  ","מזגן של חברת אלקטרה","/images/air.jpg",20,false)
// AddProudact(1," עגלת תינוק","עגלת שכיבה לתינוק","/images/bogabo..jpg",20,false)


showAllUsers();
showAllWinings()
showAllProudact()
//addWinning("6244b0c867fd38813c28b675", "624490f38eb0b4fafe6f8760", new Date())


AddUser("Naama","Frank","78676567",[
    {_id:"624490f38eb0b4fafe6f8760",item_name:"wig" ,item_description:"nice",price:20}
    , {item_id:"dddd",item_name:"yuyy" ,item_description:"fff",price:9},
  {item_id:"dddd",item_name:"iuytt" ,item_description:"fff",price:9}])
AddUser("Zipi", "Werner", "12344", [
    { _id: "624490f38eb0b4fafe6f8760", item_name: "wig", item_description: "nice", price: 20 }
    , { item_id: "dddd", item_name: "yuyy", item_description: "fff", price: 9 }
])

