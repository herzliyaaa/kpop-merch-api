const productModel = ({sequelize, DataTypes }) => {
  sequelize.define("product", {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
  });
};
