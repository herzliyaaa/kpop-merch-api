const userRoleModel = ({ sequelize, DataTypes }) => {
  const UserRole = sequelize.define(
    "user_role",
    {
      roleName: {
        type: DataTypes.STRING,
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "user_role",
      freezeTableName: true,
    }
  );

  return UserRole;
};

module.exports = userRoleModel;
