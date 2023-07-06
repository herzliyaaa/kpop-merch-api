const {
  addUserUseCase,
  editUserUseCase,
  viewUserUseCase,
  viewAllUserUseCase,
  softDeleteUserUseCase,
  loginUserUseCase,
  resetPasswordUseCase
} = require("../../use-cases/user/index");

const addUserController = require("./add-user.controller");
const editUserController = require("./edit-user.controller");
const fetchAllUsersController = require("./get-all-users.controller");
const fetchUserDetailsController = require("./get-user-details.controller");
const deleteUserController = require("./soft-delete-user.controller");
const loginUserAuthController = require("./login-user.controller");
const resetUserPasswordController = require("./reset-password.controller");

//Controller with Usecase
const postUserController = addUserController({
  addUserUseCase
});
const putUserController = editUserController({
  editUserUseCase
});
const getAllUserController = fetchAllUsersController({
  viewAllUserUseCase
});
const getUserByIdController = fetchUserDetailsController({
  viewUserUseCase
});

const softDeleteUserController = deleteUserController({
  softDeleteUserUseCase
});

const loginUserController = loginUserAuthController({
  loginUserUseCase
});
const resetPasswordController = resetUserPasswordController({
  resetPasswordUseCase
});

module.exports = Object.freeze({
  postUserController,
  putUserController,
  getAllUserController,
  getUserByIdController,
  softDeleteUserController,
  loginUserController,
  resetPasswordController
});
