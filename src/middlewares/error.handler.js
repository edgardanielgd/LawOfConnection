const boom = require("@hapi/boom");
const { ValidationError } = require('sequelize');

function logErrors ( err, req, res, next ){
    console.log( err );
    next( err );
}

function boomErrorHandler (err, req, res, next){
    if( err.isBoom ){
        const output = err.output;

        res.status( output.statusCode ).json(
            output.payload
        );
    }else
        next( err );
}
function errorHandler ( err, req, res, next){
    
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });
}

function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    });
  }
  next(err);
}

module.exports = { logErrors, errorHandler , boomErrorHandler, ormErrorHandler }