const model = require("../models/index");
const userData = require("./user.query");
const { encryptPass } = require("../../services/index");

const userDB = userData({ model, encryptPass });

module.exports = userDB;
