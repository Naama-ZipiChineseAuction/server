const express = require('express')
const cors = require('cors')
const product = require('./controllers/products')
const winning=require('./controllers/winning')
//const users = require('.controllers/users')
const app = express()


app.use(express.json())
app.use(cors())

// controllers
app.use(product)
app.use(winning)
//app.use(users)
app.get('/', async function (req, res) {
    res.status(200).send("ברוכים הבאים למכירה הסינית של ציפי ונעמה!!!!!!!!!!!")
})
app.listen(4500, () => console.log(`listening at http://localhost:4500`));

