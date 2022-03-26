const express = require('express')
const cors = require('cors')
const product = require('.controllers/product')
const users = require('.controllers/users')
const app = express()


app.use(express.json())
app.use(cors())

// controllers
app.use(product)
app.use(users)


app.listen(4500, () => console.log(`listening at http://localhost:4500`));

