
const express = require('express')
const cors = require('cors')
const users = require('./controllers/users')
const products=require("./controllers/products")
const winnings=require("./controllers/winning")
const userRout=require("./routes/users")
const { default: mongoose } = require('mongoose')
const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://localhost:27017/ChineseAuction")
    .then(() => { console.log("mongo db connected"); })
    .catch(er => { console.log(er) });
app.use("/user", userRout)

app.get('/', async function (req, res) {
    res.send("ברוך הבא למכירה הסינית")
})
app.listen(4500, () => console.log(`listening at http://localhost:4500`));

