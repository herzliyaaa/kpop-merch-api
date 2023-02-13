const productModel = require("./product.model");
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/sequelize.config");

const productDataModel = productModel({ DataTypes, sequelize });

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Book table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = { productDataModel };
