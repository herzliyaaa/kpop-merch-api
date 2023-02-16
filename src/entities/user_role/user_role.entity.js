const userRoleEntity = (userRole) => {
  const { roleName } = userRole;

  if (!roleName) {
    throw new Error("Role Name is required.");
  }

  return Object.freeze({
    roleName,
  });
};

module.exports = userRoleEntity;
