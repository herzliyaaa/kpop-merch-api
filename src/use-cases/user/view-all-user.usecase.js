const viewAllUser = ({ userDB }) => {
  return async function viewUsers() {
    const result = await userDB.getAllUsers();
    return result;
  };
};

module.exports = viewAllUser;
