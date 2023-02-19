const userRegistrationEntity = (user) => {
  const { name, username, email, password, userRoleId } = user;

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
    email,
    password,
    userRoleId
  });
};

const userLoginEntity = (user) => {
  const { email, username, password } = user;

  if (!username) {
    throw new Error("Username is required.");
  }

  if (!password) {
    throw new Error("Password is required.");
  }

  return Object.freeze({
    email,
    username,
    password
  });
};

module.exports = { userRegistrationEntity, userLoginEntity };
