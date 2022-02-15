const Sequelize = require("sequelize");
const MySQL = require("mysql2/promise");
const envData = require("../config");

const dbUser = encodeURIComponent( envData.DBUSER );
const dbPassword = encodeURIComponent( envData.DBPASSWORD );
const dbHost = encodeURIComponent( envData.DBHOST );
const dbPort = encodeURIComponent( envData.DBPORT );
const dbName = encodeURIComponent( envData.DBNAME );

const init = async () => {
    const MySQLConnection = await MySQL.createConnection({
        host: dbHost, port: dbPort, user: dbUser, password: dbPassword
    });

    await MySQLConnection.query("CREATE DATABASE IF NOT EXISTS " + dbName + ";");

    const sequelize = new Sequelize(
        dbName,
        dbUser,
        dbPassword,
        {
            host: dbHost,
            port: dbPort,
            dialect: 'mysql',
            define: {
                freezeTableName: true
            }
        }
    );
    return sequelize;
}

module.exports = init;