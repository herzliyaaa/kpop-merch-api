const userEntity = (user) => {
  const { name, username, password, userRoleId } = user;

  if (!name) {
    throw new Error("Name is required.");
  }
  if (!username) {
    throw new Error("Username is required.");
  }
  if (!password) {
    throw new Error("Password is required.");
  }
  if (!userRoleId) {
    throw new Error("Password is required.");
  }

  return Object.freeze({
    name,
    username,
    password,
    userRoleId,
  });
};

module.exports = userEntity;
