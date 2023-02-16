const userRoleData = ({ model }) => {
  return Object.freeze({
    getAllUserRoles,
    getUserRoleById,
    addUserRole,
    editUserRole,
    softDeleteUserRole,
  });

  async function getAllUserRoles() {
    try {
      const UserRole = model.userRoleDataModel;
      const response = await UserRole.findAll({
        where: { isActive: true },
        order: [["roleName", "ASC"]],
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function getUserRoleById(id) {
    try {
      const UserRole = model.userRoleDataModel;
      const response = await UserRole.findByPk(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function addUserRole(userRole) {
    try {
      const { roleName } = userRole;
      const UserRole = model.userRoleDataModel;
      const response = await UserRole.create({
        roleName: roleName,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function editUserRole(userRole) {
    try {
      const { roleName, id } = userRole;
      const UserRole = model.userRoleDataModel;
      const response = await UserRole.update(
        { roleName: roleName },
        {
          where: { id: id },
        }
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function softDeleteUserRole(id) {
    try {
      const UserRole = model.userRoleDataModel;
      const response = await UserRole.update(
        { isActive: false },
        {
          where: { id: id },
        }
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = userRoleData;
