const editUser = ({ userDB, userEntity }) => {
  return async function putUser({ id, ...userInfo }) {
    const result = userEntity(userInfo);

    const data = await userDB.editUser({
      id: id,
      name: result.name,
      description: result.description,
    });

    console.log(data)
    return {
      msg: "User Updated Successfully",
      data: data,
    };
  };
};
module.exports = editUser;
