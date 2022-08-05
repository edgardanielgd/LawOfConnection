const TeamsService = require("./../services/teams.service");

const service = new TeamsService();

exports.createTeam = async ( req, res, next ) => {
    try{
        const { userId } = req.user_data;
        req.body.idUser = userId;
        
        const newTeam = await service.create( req.body );

        res.json({
            ...newTeam,
            statusMessage: "success",
            message: "Team created successfully"
        });
    } catch( err ){
        next( err );
    }   
};

exports.addTeamMembers = async( req, res, next ) => {
    try{
        const { userId } = req.user_data;
        req.body.idUser = userId;

        const results = await service.addMembers(
            req.body
        );
        
        res.json({
            ...results,
            statusMessage: "success",
            message: "Operation completed, check results array"
        });

    }catch( err ){
        next( err );
    }
}