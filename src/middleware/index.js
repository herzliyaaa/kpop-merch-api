const jwt = require("jsonwebtoken");
const tokenChecker = require("./auth.middleware");
const authMiddleware = tokenChecker({ jwt });

module.exports = authMiddleware;
