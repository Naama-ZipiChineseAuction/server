const router = require("express").Router();
const userController = require("../controllers/users");

router.get("/getProduct/:id",userController.getProductById)
router.post("/addUser",userController.addUser)
router.post("/addOrder",userController.addOrder)
router.get("/getAllUsers",userController.getAllUser)
router.delete("/delete/:id",userController.deleteUser)

module.exports = router;