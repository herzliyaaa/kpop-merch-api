const router = require("express").Router();

const {
  getAllUserController,
  getUserByIdController,
  postUserController,
  putUserController,
  softDeleteUserController,
  loginUserController
} = require("../controllers/user/index");
// const authMiddleware = require("../middleware/index");
const makeExpressCallback = require("../express-callback/index");

router.post("/login", makeExpressCallback(loginUserController))
router.post("/user/create", makeExpressCallback(postUserController));
router.get("/user-details/:id", makeExpressCallback(getUserByIdController));
router.get("/users", makeExpressCallback(getAllUserController));
router.patch("/user/update/:id", makeExpressCallback(putUserController))
router.patch("/user/delete/:id", makeExpressCallback(softDeleteUserController))
router.post("/user/reset-password", makeExpressCallback())
module.exports = router;
