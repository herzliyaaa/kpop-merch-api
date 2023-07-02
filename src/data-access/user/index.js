const { Op } = require("sequelize");
const model = require("../models/index");
const userData = require("./user.query");
const { encryptPass } = require("../../services/index");

const nodemailer = require("nodemailer");
const userDB = userData({ model, Op, encryptPass, nodemailer });

module.exports = userDB;
