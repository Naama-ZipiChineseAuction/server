
const { Wining } = require("../models/winning.model");
module.exports.getWiningByProductId = async (req, res) => {
    let proId = req.params.id
    const p = await Wining.find({ "item_id": proId })
    return res.send(p)
}
module.exports.getWinningfByUserId = async (req, res) => {
    let userId = req.params.id
    const p = await Wining.find({ "user_id": userId })
    return res.send(p)
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
