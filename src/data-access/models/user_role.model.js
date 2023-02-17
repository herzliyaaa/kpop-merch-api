const userRoleModel = ({ sequelize, DataTypes }) => {
  const UserRole = sequelize.define(
    "userRole",
    {
      roleName: {
        type: DataTypes.STRING,
        allowNull: false
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
      tableName: "user_role",
      freezeTableName: true
    }
  );

  return UserRole;
};

module.exports = userRoleModel;
