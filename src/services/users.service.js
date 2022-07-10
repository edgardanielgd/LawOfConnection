const db = require("./../db");
const bcrypt = require("bcryptjs");
const boom = require("@hapi/boom");

class UsersService{
    constructor() {}

    async findByNickName( nickname ) {
        const sequelize = db.sequelize;
        const query = "SELECT * FROM " +
                "User" + 
                " WHERE usrNickname = '" +
                nickname + "' ;";
        const [coincidences, _] = await sequelize.query( query );
        return coincidences;
    }

    async authenticate( data ){
        const password = data.usrPassword;
        const nickname = data.usrNickname;

        const coincidences = await this.findByNickName( nickname );

        if( !coincidences || coincidences.length != 1){
            throw boom.unauthorized("Invalid user / password data");
        }

        const user = coincidences[0];
        const userPassword = user.usrPassword;
        
        const isLoginCorrect = await bcrypt.compare( password, userPassword );

        if( isLoginCorrect ){
            return user;
        }else{
            throw boom.unauthorized("Invalid user / password data");
        }
    }

    async create( data ){

        const coincidences = await this.findByNickName( data.usrNickname );

        if( coincidences && coincidences.length > 0 ){
            throw boom.conflict( "There is already a user with the same nickname" );
        }
        const sequelize = db.sequelize;
        
        const referencedCountry = await sequelize.models.Country.findByPk( data.idCountry );
        if( ! referencedCountry ){
            throw boom.conflict( "Invalid country ID" );
        }

        const newUser = await sequelize.models.User.create( data );
        return newUser;
    }
}

module.exports = UsersService;