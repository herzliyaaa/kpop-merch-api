const router = require("express").Router();

const {} = require("../controllers/product/index");
// const authMiddleware = require("../middleware/index");
const makeExpressCallback = require("../express-callback/index");

router.post("/product/create", makeExpressCallback());
router.get(
  "/product-details/:id",
  makeExpressCallback()
);
router.get("/products", makeExpressCallback());

module.exports = router;
