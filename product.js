
const {Product}=require("./models/products.model")
const express = require('express')
//const CircularJSON = require('circular-json');
//const json = CircularJSON.stringify(obj);
const app = express()
// need for use with body
//app.use(express.json())
app.listen(4002, () => { console.log("Now server on in http://localhost:4002") })
app.use(express.json())
app.get("/",async function (req, res)  {
    console.log("arrived")
    // let arr= Product.find({})
    //  console.log(arr)
 //   res.status(200).send("You used in nodeJs express")
})
app.get("/product", async function (req, res)   {
    console.log("llllllllllllllll")
   // res.status(200).send("You used in nodeJs expressjjj")
   // const arr=  Product.find({})
    // res.status(200).send(arr)
     res.status(200).send("hello")
})
console.log("hfcgg")