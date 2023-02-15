const userRoleModel = ({ sequelize, DataTypes }) => {
  const sequelizeUserRole = sequelize.define(
    "user_role",
    {
      role_name: {
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

  return sequelizeUserRole;
};

module.exports = userRoleModel;
