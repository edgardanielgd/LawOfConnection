const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const {Promisify} = require('util');
const temp = async () => {
    const sequelize = await require('./../db/index')();
    return require('./../models/user.model')(sequelize);
};
var User = temp();

exports.register = async (req, res, next) =>{
    try{
        const nickname = req.body.nickname;
        const password = req.body.password;
        const profileDescription = req.body.profile_description;
        const email = req.body.email;
        const country = req.body.country;
        let passHash = await bcryptjs.hash(password, 8);
        (await User).create({
            usrNickname : nickname,
            usrPassword : passHash,
            usrProfileDescription : profileDescription,
            usrEmail : email,
            idCountry : 1
        }).then(result => {
            res.json({
                status: "success",
                message: "REGISTRADO CORRECTAMENTE "
            });
        }).catch(err => {
            res.json({
                status: "error",
                message: "ERROR WHILE CREATING A NEW USER "
            });
            console.log(err);
        })
    }catch(error){
        next( error );
    }
}