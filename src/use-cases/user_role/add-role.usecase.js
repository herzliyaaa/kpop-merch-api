const addUserRole = ({ userRoleDB, userRoleEntity }) => {
  return async function postRole(info) {
    const result = userRoleEntity(info);

    const data = await userRoleDB.addUserRole({
      roleName: result.roleName,
    });

    return {
      msg: "Role Added Successfully",
      data: data,
    };
  };
};
module.exports = addUserRole;
