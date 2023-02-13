const productModel = ({ sequelize, DataTypes }) => {
  const sequelizeProduct = sequelize.define(
    "product",
    {
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "product",
      freezeTableName: true,
    }
  );

  return sequelizeProduct;
};

module.exports = productModel;
