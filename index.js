const express = require('express')
const cors = require('cors')
const users = require('./controllers/users')
const products=require("./controllers/products")
const winnings=require("./controllers/winning")
const app = express()
app.use(express.json())
app.use(cors())
// controllers
//app.use(product)
app.use(users)
app.use(products)
app.use(winnings)
app.get('/', async function (req, res) {
    res.send("ברוך הבא למכירה הסינית")
})
app.listen(4500, () => console.log(`listening at http://localhost:4500`));

