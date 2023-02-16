const userRoleDB = require("../../data-access/user_role/index");
const userRoleEntity = require("../../entities/user_role/index");

const addUserRole = require("./add-role.usecase");
const editUserRole = require("./edit-role.usecase");
const viewUserRole = require("./view-role.usecase");
const viewAllUserRole = require("./view-all-role.usecase");
const softDelUserRole = require("./delete-role.usecase");

const addUserRoleUseCase = addUserRole({
  userRoleDB,
  userRoleEntity
});
const editUserRoleUseCase = editUserRole({
  userRoleDB,
  userRoleEntity
});
const viewUserRoleUseCase = viewUserRole({ userRoleDB });
const viewAllUserRoleUseCase = viewAllUserRole({ userRoleDB });
const softDeleteUserRoleUseCase = softDelUserRole({ userRoleDB });

module.exports = {
  addUserRoleUseCase,
  editUserRoleUseCase,
  viewUserRoleUseCase,
  viewAllUserRoleUseCase,
  softDeleteUserRoleUseCase
};
