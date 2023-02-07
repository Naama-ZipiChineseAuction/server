

const { User } = require("../models/user.model");
const { orderSchema } = require("../models/order.model");

module.exports.addUser = async (req, res) => {
    let userAdd = req.body;
    try {
        let user = await User.find({});
        user = user.find(u => u.user_password === userAdd.user_password || u.user_email === userAdd.user_email)
        console.log(user)
        if (user)
            return res.status(400).send(null)
        let a = new User(userAdd)
        await a.save()
        res.status(201).send(user)
    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }

}

module.exports.getProductById = async (req, res) => {
    try {
        let id = req.params.id;
        let order = await User.findById(id)
        order = order.arr_orders
        return res.send(order);

    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}
module.exports.getAllUser = async (req, res) => {
    try {

        let user = await User.find({});
        return res.send(user);

    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}
module.exports.addOrder = async (req, res) => {
    let user = req.body;
    let id = user._id;
    let x = await User.findById(id)
    if (x == null) {
        let userAdd = user
        try {
            let a = new User(userAdd)
            await a.save()
            return res.status(201).send("user added")

        }
        catch (e) {
            console.log(e);
            return res.status(400).send(e);
        }
    }
    else {
        x.arr_orders.push(user.arr_orders)
        return res.status(201).send("add order to user")
    }

}

module.exports.deleteUser = async (req, res) => {
    let id = req.params.id;
    try {
        const a = await User.findByIdAndRemove(id)
        console.log(a);
        return res.send(a);
    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}