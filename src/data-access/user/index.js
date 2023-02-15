const model = require("../models/index");
const userData = require("./user.query");

const userDB = userData({ model });

module.exports = userDB;
