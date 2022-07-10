const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const { Promisify } = require('util');
const db = require("../db");
const { JWT_KEY, JWT_HEADER_KEY } = require("../config");
const boom = require("@hapi/boom");
const UsersService = require("../services/users.service");


const service = new UsersService();

const genToken = ( userId ) => {
    const data = {
        time: Date(),
        userId
    };

    const token = jwt.sign( data, JWT_KEY);

    return {
        token,
        token_header_key: JWT_HEADER_KEY,
    }
    
}

exports.register = async (req, res, next) =>{
    try{
        service.create( 
            req.body 
        ).then(result => {
            
            const token_data = genToken( result.idUser, res );

            res.json({
                ...token_data,
                status: "success",
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
            
            const token_data = genToken( result.idUser, res );

            res.json({
                ...token_data,
                status: "success",
                message: "User logged in successfully"
            });

        }).catch(err => {
            next( err );
        })
    }catch(error){
        next( error );
    }
}