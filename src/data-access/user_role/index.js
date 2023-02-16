const model = require("../models/index");
const userRoleData = require("./user_role.query");

const userRoleDB = userRoleData({ model });

module.exports = userRoleDB;
