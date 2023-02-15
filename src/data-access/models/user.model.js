const userModel = ({ sequelize, DataTypes }) => {
  const sequelizeUser = sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "user",
      freezeTableName: true,
    }
  );

  return sequelizeUser;
};

module.exports = userModel;
