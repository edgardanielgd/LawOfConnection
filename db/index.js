const Sequelize = require("sequelize");
const MySQL = require("mysql2/promise");
const envData = require("../config");

const configModels = require("./models");

const dbUser = envData.DBUSER;
const dbPassword = envData.DBPASSWORD;
const dbHost = envData.DBHOST;
const dbPort = envData.DBPORT;
const dbName = envData.DBNAME;

let db = { init: init };
module.exports = db;

function init() {
    return new Promise( async (resolve, reject) => {
        const MySQLPool = MySQL.createPool({
            host: dbHost, port: dbPort, user: dbUser, password: dbPassword
        });
        
        await MySQLPool.query( `CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);

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
        
        configModels( sequelize );
        
        await sequelize.sync();
        
        delete db.init;

        db.sequelize = sequelize;

        resolve( sequelize );
    });
}
