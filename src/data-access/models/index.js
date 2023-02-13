const productModel = require("./product.model");
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/sequelize.config");

const productDataModel = productModel({ DataTypes, sequelize });

module.exports = { productDataModel };
