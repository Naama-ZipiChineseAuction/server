const express = require('express')
const router = express.Router()
const user=require('../models/user.model')

router.get('/users/getProduct/:id', async function (req, res) {
    res.send("get product")
})
router.post('/users/addUser', async function (req, res) {    
    const userAdd = req.body
    if (!userAdd) {
        res.status(400).send("user not found")
        return
    }
   let a=new User(userAdd)
   await a.save()
    res.status(201).send("user added")
})    
router.post('/users/addOrder/id', async function (req, res) {
res.status(200).send("order added!!")
})
module.exports = router;