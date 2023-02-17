const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { encryptPassword, comparePassword } = require("./password.service");
const generateJWT = require("./token.service");

const comparePass = comparePassword({ bcrypt });
const encryptPass = encryptPassword({ bcrypt });
const generateToken = generateJWT({ jwt });

module.exports = { encryptPass, comparePass, generateToken };
