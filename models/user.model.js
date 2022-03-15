const mongoose=require("mongoose");
const orderSchema = require("./order.model").orderSchema;
const userSchema=new mongoose.Schema({
  
    user_first_name:String,
    user_last_name:String,
    user_phone:String,
    arr_orders:[orderSchema]


})
const User=mongoose.model("user",userSchema);
module.exports={userSchema,User};