const router = require("express").Router();
const productController = require("../controllers/products");

router.get("/getAllProducts", productController.getallProducts);
router.delete("/delete/:id",productController.deleteProduct);
router.post("/add",productController.addProduct)
router.get("/getById/:id",productController.getProductById)

module.exports = router;