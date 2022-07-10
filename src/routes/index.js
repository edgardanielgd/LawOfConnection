const express = require('express');
const router = express.Router();

const { authenticationHandler } = require("../middlewares/authentication.handler");

const teamsRouter = require("./teams.router");
const authRouter = require("./authentication.router");

router.use( authRouter );
router.use( "/teams", teamsRouter );


router.get('/', authenticationHandler, (req, res) => {
    res.send('PÁGINA DE INICIO')
})

module.exports = router;