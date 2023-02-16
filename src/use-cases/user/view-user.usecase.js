const viewUser = ({ userDB }) => {
  return async function viewUser(info) {
    const { id } = info;
    const result = await userDB.getUserById(id);
    return result;
  };
};

module.exports = viewUser;
