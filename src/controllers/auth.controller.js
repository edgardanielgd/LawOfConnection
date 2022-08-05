const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const { Promisify } = require('util');
const db = require("../db");
const { JWT_KEY, JWT_COOKIE_NAME } = require("../config");
const boom = require("@hapi/boom");
const UsersService = require("../services/users.service");


const service = new UsersService();

const setToken = ( userId, res ) => {
    const data = {
        time: Date(),
        userId
    };

    const token = jwt.sign( data, JWT_KEY);

    res.cookie(
        JWT_COOKIE_NAME,
        token,
        { signed: true }
    );
    
}

exports.register = async (req, res, next) =>{
    try{
        service.create( 
            req.body 
        ).then(result => {
            
            setToken( result.idUser, res );

            res.json({
                statusMessage: "success",
                message: "User registered correctly"
            });

        }).catch(err => {
            next( err );
        })
    }catch(error){
        next( error );
    }
}

exports.login = async ( req, res, next) => {
    try{
        service.authenticate( 
            req.body 
        ).then(result => {
            
            setToken( result.idUser, res );
            
            res.json({
                statusMessage: "success",
                message: "User logged in successfully"
            });

        }).catch(err => {
            next( err );
        })
    }catch(error){
        next( error );
    }
}