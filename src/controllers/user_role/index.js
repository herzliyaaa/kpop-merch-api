const {
  addUserRoleUseCase,
  editUserRoleUseCase,
  viewUserRoleUseCase,
  viewAllUserRoleUseCase,
  softDeleteUserRoleUseCase
} = require("../../use-cases/user_role/index");

const addUserRoleController = require("./add-user-role.controller");
const editUserRoleController = require("./edit-user-role.controller");
const fetchAllUserRolesController = require("./get-all-roles.controller");
const fetchUserRoleDetailsController = require("./get-role-details.controller");
const deleteUserRoleController = require("./soft-delete-role.controller");

const postUserRoleController = addUserRoleController({
  addUserRoleUseCase
});
const putUserRoleController = editUserRoleController({
  editUserRoleUseCase
});
const getAllUserRoleController = fetchAllUserRolesController({
  viewAllUserRoleUseCase
});
const getUserRoleByIdController = fetchUserRoleDetailsController({
  viewUserRoleUseCase
});

const softDeleteUserRoleController = deleteUserRoleController({
  softDeleteUserRoleUseCase
});

module.exports = Object.freeze({
  postUserRoleController,
  putUserRoleController,
  getAllUserRoleController,
  getUserRoleByIdController,
  softDeleteUserRoleController
});
