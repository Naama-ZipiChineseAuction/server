const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/dbbbb")
    .then(() => { console.log('mongo db connected') })
    .catch(er => {
        console.log(er)
    })