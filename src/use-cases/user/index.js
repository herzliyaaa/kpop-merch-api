const userDB = require("../../data-access/user/index");
const userEntity = require("../../entities/user/index");

const addUser = require("./add-user.usecase");
const editUser = require("./edit-user.usecase");
const viewUser = require("./view-user.usecase");
const viewAllUser = require("./view-all-user.usecase");
const softDelUser = require("./delete-user.usecase");

const addUserUseCase = addUser({
  userDB,
  userEntity
});
const editUserUseCase = editUser({
  userDB,
  userEntity
});
const viewUserUseCase = viewUser({ userDB });
const viewAllUserUseCase = viewAllUser({ userDB });
const softDeleteUserUseCase = softDelUser({ userDB });

module.exports = {
  addUserUseCase,
  editUserUseCase,
  viewUserUseCase,
  viewAllUserUseCase,
  softDeleteUserUseCase
};
