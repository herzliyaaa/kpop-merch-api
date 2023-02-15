const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const {comparePassword, encryptPassword} = require("./password.service");
const generateJWT = require("./token.service");


const comparePassword = comparePassword({ bcrypt });
const encryptPassword = encryptPassword({ bcrypt });
const generateToken = generateJWT({ jwt });

module.exports = { encryptPassword, comparePassword, generateToken };
