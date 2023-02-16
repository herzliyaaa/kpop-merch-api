const viewUserRole = ({ userRoleDB }) => {
  return async function viewUserRole(info) {
    const { id } = info;
    const result = await userRoleDB.getUserRoleById(id);
    return result;
  };
};

module.exports = viewUserRole;
