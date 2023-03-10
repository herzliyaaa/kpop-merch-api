const loginUser = ({ userDB, userLoginEntity, generateToken, comparePass }) => {
  return async function postLoginUser(info) {
    const result = userLoginEntity(info);
    const userExists = await userDB.findByUsername(result.username);
    let token = "";

    if (userExists === undefined || userExists.length == 0) {
      throw new Error("User does not exist!");
    }

    if (userExists[0].dataValues.isActive === false) {
      throw new Error("User is already inactive!");
    }

    const validPassword = await comparePass(
      result.password,
      userExists[0].dataValues.password
    );

    if (validPassword) {
      token = generateToken(userExists[0].dataValues.id);
      console.log(token);
    } else {
      throw new Error("Incorrect Password!");
    }

    return {
      token: token,
      username: userExists[0].dataValues.username,
      name: userExists[0].dataValues.name
    };
  };
};
module.exports = loginUser;
