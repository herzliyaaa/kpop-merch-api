const userDB = require("../../data-access/user/index");
const {
  userRegistrationEntity,
  userLoginEntity
} = require("../../entities/user/index");

const { comparePass, generateToken } = require("../../services/index");
const addUser = require("./add-user.usecase");
const editUser = require("./edit-user.usecase");
const viewUser = require("./view-user.usecase");
const viewAllUser = require("./view-all-user.usecase");
const softDelUser = require("./delete-user.usecase");
const loginUser = require("./login-user.usecase");
const resetPassword = require("./reset-password.usecase");

const addUserUseCase = addUser({
  userDB,
  userRegistrationEntity
});
const editUserUseCase = editUser({
  userDB,
  userRegistrationEntity
});
const viewUserUseCase = viewUser({ userDB });
const viewAllUserUseCase = viewAllUser({ userDB });
const softDeleteUserUseCase = softDelUser({ userDB });
const loginUserUseCase = loginUser({
  userDB,
  userLoginEntity,
  comparePass,
  generateToken
});
const resetPasswordUseCase = resetPassword({ userDB });
module.exports = {
  addUserUseCase,
  editUserUseCase,
  viewUserUseCase,
  viewAllUserUseCase,
  softDeleteUserUseCase,
  loginUserUseCase,
  resetPasswordUseCase
};
