const dotenv = require("dotenv");
dotenv.config();

const envData = {
    DBUSER : process.env.dbUser,
    DBPASSWORD : process.env.dbUserPassword,
    DBHOST : process.env.dbHost,
    DBPORT : process.env.dbPort,
    DBNAME : process.env.dbName,
    PORT : process.env.PORT || 3000,
    JWT_HEADER_KEY: process.env.jwtHeaderKey,
    JWT_KEY: process.env.jwtSecretKey,
}

module.exports = envData;