const express = require('express')
const router = express.Router()
const { winning, Wining } = require("../models/winning.model");
module.exports.getWiningByProductId = async (req, res) => {
    let proId = req.params.id

}
module.exports.getUsersByProductId = async (req, res) => {

}
module.exports.addWinning = async (req, res) => {
    let w = req.body
    let a = new winning(w)
    try {
        await a.save();
        return res.send()
    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e);

    }

}
module.exports.getWiningById = async (req, res) => {
    let id = req.params.id;
    let b = await Wining.findById(id)
    return res.send(b)
}
module.exports = router;