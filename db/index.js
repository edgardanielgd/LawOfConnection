const Sequelize = require("sequelize");
const MySQL = require("mysql2/promise");
const envData = require("../config");

const dbUser = envData.DBUSER;
const dbPassword = envData.DBPASSWORD;
const dbHost = envData.DBHOST;
const dbPort = envData.DBPORT;
const dbName = envData.DBNAME;

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
            logging: false,
            dialect: 'mysql',
            define: {
                freezeTableName: true
            }
        }
    );
    return sequelize;
}

module.exports = init;