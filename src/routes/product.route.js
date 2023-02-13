const router = require("express").Router();

const {
  getAllProductController,
  getProductByIdController,
  postProductController,
  putProductController,
  softDeleteProductController,
} = require("../controllers/product/index");
// const authMiddleware = require("../middleware/index");
const makeExpressCallback = require("../express-callback/index");

router.post("/product/create", makeExpressCallback(postProductController));
router.get("/product-details/:id", makeExpressCallback(getProductByIdController));
router.get("/products", makeExpressCallback(getAllProductController));
router.patch("/product/update/:id", makeExpressCallback(putProductController))

module.exports = router;
