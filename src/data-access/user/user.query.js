const userData = ({ model, encryptPass }) => {
  return Object.freeze({
    findByUsername,
    findByEmail,
    getAllUsers,
    getUserById,
    addUser,
    editUser,
    softDeleteUser,
  });

  async function findByUsername( username ) {
    try {
      const User = model.userDataModel;
      const response = await User.findAll({
        where: { username: username },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function findByEmail({ email }) {
    try {
      const User = model.userDataModel;
      const response = await User.findAll({
        where: { email: email },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

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
      const { name, username, password, userRoleId } = user;
      const User = model.userDataModel;

      let hashedPassword = await encryptPass(password);

      let response = await User.create({
        name: name,
        username: username,
        password: hashedPassword,
        userRoleId: userRoleId,
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

      return response;
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = userData;
