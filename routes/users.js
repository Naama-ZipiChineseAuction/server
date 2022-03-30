const router = require("express").Router();
const userController = require("../controllers/users");

router.get("/getProduct/:id",userController.getProductById)
router.post("/addUser",userController.addUser)

router.post("/addOrder",userController.getAllUser)
router.get("/getAllUsers",userController.getAllUser)
module.exports = router;