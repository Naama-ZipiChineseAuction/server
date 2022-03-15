// const mongoose = require("mongoose");
// const authorSchema = require("./author.model").authorSchema;
// const bookSchema = new mongoose.Schema({
//     name: String,
//     publishDate: { type: Date, default: Date.now() },
//     isHard: Boolean,
//     price: Number,
//     author: authorSchema
// });
// const Book = mongoose.model("books", bookSchema);
// module.exports = { bookSchema, Book };
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