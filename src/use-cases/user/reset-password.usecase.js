const resetPassword = ({ userDB }) => {
  return async function putUser(user) {
    const { email } = user;
    const userExists = await userDB.findUser(email);

    //Find User
    if (!userExists) {
      throw new Error("User does not exist!");
    }

    //Generate token and Update the token in database
    const resetToken = await userDB.generateResetToken(email);

    //Send Email
    await userDB.sendEmail({ email, resetToken });

    return {
      msg: "User Updated Successfully",
      user: data
    };
  };
};
module.exports = resetPassword;
