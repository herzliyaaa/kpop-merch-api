const addUser = ({ userDB, userRegistrationEntity }) => {
  return async function postUser(info) {
    const result = userRegistrationEntity(info);

    const data = await userDB.addUser({
      name: result.name,
      username: result.username,
      password: result.password,
      userRoleId: result.userRoleId
    });

    return {
      msg: "User Added Successfully",
      data: data
    };
  };
};
module.exports = addUser;
