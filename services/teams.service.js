const db = require("../db");
const boom = require("@hapi/boom");

class TeamsService {
    constructor() {}

    async findByName( teamname ) {
        const sequelize = db.sequelize;
        const query = "SELECT * FROM " +
                "Team" + 
                " WHERE teamName = '" +
                teamname + "' ;";
        const [coincidences, _] = await sequelize.query( query );
        return coincidences;
    }

    async addUser( data ){
        throw boom.notImplemented("Not implemented yet :)");
    }

    async create( data ){

        const coincidences = await this.findByName( data.teamName );

        if( coincidences && coincidences.length > 0 ){
            throw boom.conflict( "There is already a team with the same name" );
        }
        const sequelize = db.sequelize;
        
        const referencedOwner = await sequelize.models.User.findByPk( data.idUser );
        if( ! referencedOwner ){
            throw boom.conflict( "Invalid user ID" );
        }
        
        const newTeam = await sequelize.models.Team.create( data );
        newTeam.addUser( referencedOwner, {
            role: "Owner"
        });

        return newTeam;
    }
}

module.exports = TeamsService;