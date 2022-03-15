const express = require('express')
const app = express()
const {User}=require("./models/user.model")
app.use(express.json())
app.listen(4002, () => { console.log("Now server on in http://localhost:4002") })
app.post("/User/add", (req, res) =>  {
    const userAdd = req.body
    if (!userAdd) {
        res.status(400).send("User blank")
        return
    }
    //User.push(userAdd)
    res.status(201).send("User added")
})
app.get("/User/getById/:id" ,async function(req, res)  {
    const { id: userId = 1 } = req.params
    const order =  User.find({})
    if(!order){
        res.status(400).send("User id not found")
       return
    }
    res.status(200).send(order)
})
//של המורה
// const express = require('express')
// const { users } = require("./users")
// //////const db = require("./db")
// const app = express()

// // need for use with body
// //חיים מאושרים בלי אינטרנט וסרטים!!!!!!!!
// app.use(express.json())

// let countEnters = 0
// // middleware
// app.use((req, res, next) => {
//     countEnters++
//     console.log(countEnters)
//     if (countEnters > 5) {
//         res.status(200).send("You are the winner!")
//         return
//     }
//     next()
// })

// app.listen(4000, () => { console.log("Now server on in http://localhost:4000") })

// app.get("/", (req, res) => {
//     console.log("arrived")
//     res.status(200).send("You used in nodeJs express")
// })

// app.get("/users", (req, res) => {
//     res.status(200).send(users)
// })

// app.get("/users/getById/:id", (req, res) => {
//     // const id = req.params.id
//     // const userId = id ? id : 1
//     // const userId = req.params.id || 1
//     const { id: userId = 1 } = req.params
//     const currentUser = users.find(u => u.id === +userId)
//     if (!currentUser) {
//         res.status(400).send("User id not found")
//         return
//     }
//     res.status(200).send(currentUser)
// })

// app.post("/users/add", (req, res) => {
//     const userAdd = req.body
//     if (!userAdd) {
//         res.status(400).send("User blank")
//         return
//     }
//     users.push(userAdd)
//     res.status(201).send("User added")
// })

// app.delete('/users/del/:id', (req, res) => {
//     const { id: userId = 1 } = req.params
//     const currentUser = users.findIndex(u => u.id === +userId)
//     if (currentUser === -1) {
//         res.status(400).send("User not found")
//         return
//     }
//     users.splice(currentUser, 1)
//     res.status(200).send("User deleted")
// })

// app.get("/medicines",async (req, res) => {
//   // const Medicine = await db.getMedicine()
//     res.status(200).send(Medicine)
// })
