function RequestRefactorHandler (refactor, request_field){
    return ( req, res, next) => {
        const data_refactored = req[ request_field ];

        const old_keys = Object.keys( data_refactored );
        
        for( const key of old_keys ){
            const new_key = refactor[ key ];
            
            if( new_key ){
                data_refactored[ new_key ] = data_refactored[ key ];
            }
            delete data_refactored[ key ]; // Also unnecesary keys should be deleted
        }
        
        req[ request_field ] = data_refactored;
        next();
    }
}

module.exports = { RequestRefactorHandler };