const db = require("./../db");
const models = require("./../models");

class DBService{
    constructor(){}

    init = async () =>{
        const dbSequelize = await db();
        const sequelize = await models( dbSequelize );
        this.sequelize = sequelize;
        this.initialized = true;
    }
}

module.exports = DBService;