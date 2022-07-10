const TeamsService = require("./../services/teams.service");

const service = new TeamsService();

exports.createTeam = async ( req, res, next ) => {
    try{
        const { userId } = req.user_data;
        req.body.idUser = userId;
        
        const newTeam = await service.create( req.body );

        res.json({
            ...newTeam,
            status: "success",
            message: "Team created successfully"
        });
    } catch( err ){
        next( err );
    }   
};