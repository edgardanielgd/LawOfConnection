const express = require('express');
const router = express.Router();
const { UserRegister, UserLogin , UserRegisterRefactor } = require("./../schemas/user.schema");
const auth = require("../controllers/auth.controller");
const { validationHandler } = require("./../middlewares/validation.handler");
const { RequestRefactorHandler } = require("./../middlewares/request_refactor.handler");

router.post(
    '/login',
    validationHandler( UserLogin, "body" ),
    RequestRefactorHandler( UserRegisterRefactor, "body"), 
    auth.login
)

// router.get('/register', (req, res) => {
//     res.send('REGISTRO')
// })

router.post(
    '/register',
    validationHandler( UserRegister, "body" ),
    RequestRefactorHandler( UserRegisterRefactor, "body"),
    auth.register
);

module.exports = router;