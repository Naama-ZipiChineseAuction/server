const express = require('express')
const router = express.Router()


router.post('/winning/addWining', async function (req, res) {

})
router.get('/winning/getUsersByProductId/:id' ,async function(req, res) {

})
router.get('/winning/getWiningbyId/:id' ,async function(req, res) {

})
router.get('/winning/getWiningByProductId/:id' ,async function(req, res) {
    res.send("get wining by product id")
})

module.exports = router;