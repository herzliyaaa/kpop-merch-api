const softDelUserRole = ({ userRoleDB }) => {
  return async function deleteUserRole(info) {
    const { id } = info;

    const result = await userRoleDB.softDeleteUserRole(id);
    return { message: "UserRole Deleted Successfully", data: result.rows };
  };
};

module.exports = softDelUserRole;
