const userData = ({ model, Op, encryptPass }) => {
  return Object.freeze({
    findByUsername,
    findUser,
    getAllUsers,
    getUserById,
    addUser,
    editUser,
    softDeleteUser
  });

  async function findByUsername(username) {
    try {
      const User = model.userDataModel;
      const response = await User.findAll({
        where: { username: username }
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function findUser(user) {
    try {
      const { username, email } = user;
      const User = model.userDataModel;
      const response = await User.findAll({
        where: {
         [Op.or]: [
            {
              email: email
            },
            {
              username: username
            }
          ]
        }
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllUsers() {
    try {
      const User = model.userDataModel;
      const UserRole = model.userRoleDataModel;
      const response = await User.findAll({
        include: [
          {
            model: UserRole,
            required: true,
            attributes: ["roleName"]
          }
        ],
        where: { isActive: true },
        order: [["name", "DESC"]]
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
      const { name, username, password, email, userRoleId } = user;
      const User = model.userDataModel;

      const hashedPassword = await encryptPass(password);

      const response = await User.create({
        name: name,
        username: username,
        email: email,
        password: hashedPassword,
        userRoleId: userRoleId
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
          where: { id: id }
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
          where: { id: id }
        }
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = userData;
