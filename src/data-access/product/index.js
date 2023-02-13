const model = require("../models/index");
const productData = require("./product.query");

const productDB = productData({ model });

module.exports = productDB;
