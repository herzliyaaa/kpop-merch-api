const { DataTypes } = require("sequelize");
const sequelize = require("../../config/sequelize.config");

const productModel = require("./product.model");
const userModel = require("./user.model");
const userRoleModel = require("./user_role.model");

const productDataModel = productModel({ DataTypes, sequelize });
const userDataModel = userModel({ DataTypes, sequelize });
const userRoleDataModel = userRoleModel({ DataTypes, sequelize });

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = { productDataModel, userDataModel, userRoleDataModel };
