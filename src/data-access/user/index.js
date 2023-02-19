const { Op } = require("sequelize");
const model = require("../models/index");
const userData = require("./user.query");
const { encryptPass } = require("../../services/index");

const userDB = userData({ model, Op, encryptPass });

module.exports = userDB;
