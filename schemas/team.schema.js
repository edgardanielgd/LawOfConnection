const Joi = require("joi");

const team_name = Joi.string().min(4).max(20);

const TeamCreate = Joi.object({
    team_name: team_name.required()
});

const TeamCreateRefactor = {
    team_name: "teamName"
}

module.exports = { TeamCreate, TeamCreateRefactor }
