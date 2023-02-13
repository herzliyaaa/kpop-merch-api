const dbs = require("../../config/db.config");
const salespersonData = require("./salesperson.query");

const salespersonDB = salespersonData({ dbs });

module.exports = salespersonDB;
