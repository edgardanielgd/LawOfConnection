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

    async addMembers( data ){

        const sequelize = db.sequelize;

        const referencedOwner = await sequelize.models.User.findByPk( data.idUser );

        if( ! referencedOwner ){
            throw boom.conflict( "Invalid user ID" );
        }

        const referencedTeam = await sequelize.models.Team.findByPk( data.idTeam, {
            include: "TeamParticipation"
        } );

        if( ! referencedTeam ){
            throw boom.conflict( "Invalid team ID" );
        }

        const requesterPartcipation = referencedTeam.TeamParticipations.find( (participation) => {
            participation.idUser === data.idUser
        });

        if( !requesterPartcipation )
            throw boom.conflict( "This user isn't a member of specified team" );

        const role = requesterPartcipation.role;

        if( role != "Owner" )
            throw boom.conflict( "This user cant invite team members (must be an owner)" );
        
        const resultsLog = [];

        await data.teamMembers.forEach( async( memberId ) => {
            const member = await sequelize.models.User.findByPk( memberId );

            if( !member ){
                resultsLog.push(
                    "Could not find user: " + memberId
                );
                return;
            }
            
            const memberParticipation = referencedTeam.TeamParticipations.find( (participation) => {
                participation.idUser === memberId
            });
            
            if( memberParticipation ){
                resultsLog.push(
                    "User: " + memberId + " already is member of this team"
                );
                return;
            }

            await referencedTeam.addUser( member, {
                role: "Member"
            });

            resultsLog.push(
                "User: " + memberId + " added successfully"
            );
        });
        
        return {
            results: resultsLog
        };
        
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
        await newTeam.addUser( referencedOwner, {
            role: "Owner"
        });

        return newTeam;
    }
}

module.exports = TeamsService;