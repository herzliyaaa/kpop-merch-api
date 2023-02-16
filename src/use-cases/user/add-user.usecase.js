const addUser = ({ userDB, userEntity }) => {
  return async function postUser(info) {
    const result = userEntity(info);

    const data = await userDB.addUser({
      name: result.name,
      username: result.username,
      password: result.password,
      userRoleId: result.userRoleId
    });

    return {
      msg: "User Added Successfully",
      data: data,
    };
  };
};
module.exports = addUser;
