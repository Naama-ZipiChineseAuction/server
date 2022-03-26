const express = require('express')
const cors = require('cors')
const users = require('./controllers/users')
const product = require('./controllers/products')
 const winning=require('./controllers/winning')
const app = express()
app.use(express.json())
app.use(cors())

app.use(users)
app.use(product)
app.use(winning)
app.get('/', async function (req, res) {
    res.send("ברוך הבא למכירה הסינית")
})
app.listen(4500, () => console.log(`listening at http://localhost:4500`));






