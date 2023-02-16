const editUserRole = ({ userRoleDB, userRoleEntity }) => {
  return async function putUserRole({ id, ...userRoleInfo }) {
    const result = userRoleEntity(userRoleInfo);

    const data = await userRoleDB.editUserRole({
      id: id,
      roleName: result.roleName
    });

    console.log(data)
    return {
      msg: "UserRole Updated Successfully",
      data: data,
    };
  };
};
module.exports = editUserRole;
