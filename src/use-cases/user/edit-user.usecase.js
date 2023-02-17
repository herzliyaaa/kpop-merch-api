const editUser = ({ userDB, userRegistrationEntity }) => {
  return async function putUser({ id, ...userInfo }) {
    const result = userRegistrationEntity(userInfo);

    const data = await userDB.editUser({
      id: id,
      name: result.name,
      username: result.username,
      password: result.password,
      userRoleId: result.userRoleId
    });

    return {
      msg: "User Updated Successfully",
      user: data
    };
  };
};
module.exports = editUser;
