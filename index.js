
const express = require('express')
const cors = require('cors')
const userRout=require("./routes/users")
const productRout=require("./routes/product")
const wininnigRout=require("./routes/winning")

const { default: mongoose } = require('mongoose')
const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://localhost:27017/ChineseAuctionnzz")
    .then(() => { console.log("mongo db connected"); })
    .catch(er => { console.log(er) });
app.use("/user", userRout)
app.use("/products",productRout)
app.use("/winnings",wininnigRout)
app.get('/', async function (req, res) {
    res.send("ברוך הבא למכירה הפומבית")
})
app.listen(4500, () => console.log(`listening at http://localhost:4500`));

