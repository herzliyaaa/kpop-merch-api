const router = require("express").Router();

const {
  getAllUserRoleController,
  getUserRoleByIdController,
  postUserRoleController,
  putUserRoleController,
  softDeleteUserRoleController,
} = require("../controllers/user_role/index");
// const authMiddleware = require("../middleware/index");
const makeExpressCallback = require("../express-callback/index");

router.post("/role/create", makeExpressCallback(postUserRoleController));
router.get("/role-details/:id", makeExpressCallback(getUserRoleByIdController));
router.get("/roles", makeExpressCallback(getAllUserRoleController));
router.patch("/role/update/:id", makeExpressCallback(putUserRoleController))
router.patch("/role/delete/:id", makeExpressCallback(softDeleteUserRoleController))

module.exports = router;
