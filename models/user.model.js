const mongoose=require("mongoose");
const orderSchema = require("./order.model").orderSchema;
const userSchema=new mongoose.Schema({
    user_name:String,
    user_email:String,
    user_phone:String,
    user_password:String,
    arr_orders:[orderSchema]
})
const User=mongoose.model("user",userSchema);
module.exports={userSchema,User};