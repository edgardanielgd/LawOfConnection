const Joi = require("joi");

const team_name = Joi.string().min(4).max(20);
const team_id = Joi.number().integer();
const members_ids = Joi.array().items( Joi.number().integer() )
                    .min(1).max(20).unique();

const TeamCreate = Joi.object({
    team_name: team_name.required()
});

const TeamAddMembers = Joi.object({
    team_id: team_id.required(),
    team_members: members_ids.required()
});

const TeamCreateRefactor = {
    team_name: "teamName"
}

const TeamAddMembersRefactor = {
    team_id: "idTeam",
    team_members: "teamMembers"
}

module.exports = { TeamCreate, TeamCreateRefactor, TeamAddMembers, TeamAddMembersRefactor }
