const boom = require("@hapi/boom");

function validationHandler (schema, req_field) {
    return (req, res, next) => {
        const validation = schema.validate( 
            req[req_field] ,
            {
                abortEarly: false
            }
        );

        if( validation.error ) {
            next( boom.badRequest( validation.error ));
        }else
            next();
    }
}

module.exports = { validationHandler }