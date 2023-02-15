const userData = ({ model }) => {
  return Object.freeze({
    getAllUsers,
    getUserById,
    addUser,
    editUser,
    softDeleteUser,
  });

  async function getAllUsers() {
    try {
      const User = model.userDataModel;
      const response = await User.findAll({
        where: { isActive: true },
        order: [["name", "DESC"]],
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function getUserById(id) {
    try {
      const User = model.userDataModel;
      const response = await User.findByPk(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function addUser(user) {
    try {
      const { name, username, password, user_role_id } = user;
      const User = model.userDataModel;
      const response = await User.create({
        name: name,
        username: username,
        password: password,
        user_role_id: user_role_id
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function editUser(user) {
    try {
      const { name, description, id } = user;
      const User = model.userDataModel;
      const response = await User.update(
        { name: name, description: description },
        {
          where: { id: id },
        }
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function softDeleteUser(id) {
    try {
      const User = model.userDataModel;
      const response = await User.update(
        { isActive: false },
        {
          where: { id: id },
        }
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = userData;
