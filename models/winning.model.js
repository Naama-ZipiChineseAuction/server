const mongoose=require("mongoose")
const winningSchema=new mongoose.Schema({
    user_id:{
        type: mongoose.Types.ObjectId,
        ref:"users"
    },
    item_id:{
        type:mongoose.Types.ObjectId,
        ref:"products"
    },
    winingDate:Date
})

const Wining=mongoose.model("winings",winningSchema)
module.exports={winningSchema,Wining}