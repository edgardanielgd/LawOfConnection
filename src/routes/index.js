const express = require('express');

const router = express.Router();
const apiRouter = express.Router();

const teamsRouter = require("./teams.router");
const authRouter = require("./authentication.router");

router.use( authRouter );
router.use( "/teams", teamsRouter );

apiRouter.use( "/api/v1" , router );

// router.get('/', authenticationHandler, (req, res) => {
//     res.send('PÁGINA DE INICIO')
// });

module.exports = apiRouter;