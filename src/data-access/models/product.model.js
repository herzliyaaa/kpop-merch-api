const productModel = ({ sequelize, DataTypes }) => {
  const Product = sequelize.define(
    "product",
    {
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "product",
      freezeTableName: true,
    }
  );

  return Product;
};

module.exports = productModel;
