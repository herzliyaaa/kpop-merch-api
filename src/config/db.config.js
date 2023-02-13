const dotenv = require("dotenv");

dotenv.config();

module.exports = {

    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    DB: process.env.DB_NAME,
    PASSWORD: process.env.DB_PASSWORD,
    dialect: "postgres",
 
};
