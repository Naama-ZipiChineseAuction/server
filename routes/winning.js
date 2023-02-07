const router = require("express").Router();
const winningController = require("../controllers/winning");

router.post("/add", winningController.addWinning)
router.get("/getById/:id", winningController.getWiningById)
router.get("/getByProId/:id", winningController.getWiningByProductId)
router.get("/getByUserId/:id", winningController.getWinningfByUserId)

module.exports = router;