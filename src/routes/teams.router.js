const express = require('express');
const { TeamCreate, TeamCreateRefactor, TeamAddMembers, TeamAddMembersRefactor } 
    = require("../schemas/team.schema");
const router = express.Router();
const { authenticationHandler } = require("./../middlewares/authentication.handler");
const { validationHandler } = require("./../middlewares/validation.handler");
const { RequestRefactorHandler } = require("./../middlewares/request_refactor.handler");
const team = require("./../controllers/team.controller");

router.post(
    "/createTeam",
    authenticationHandler,
    validationHandler( TeamCreate, "body" ),
    RequestRefactorHandler( TeamCreateRefactor, "body"),
    team.createTeam    
);

router.post(
    "/addTeamMember",
    authenticationHandler,
    validationHandler( TeamAddMembers, "body" ),
    RequestRefactorHandler( TeamAddMembersRefactor, "body"),
    team.addTeamMembers
);

module.exports = router;   