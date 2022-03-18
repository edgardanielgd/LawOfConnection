const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const {Promisify} = require('util');
const temp = async () => {
    const sequelize = await require('./../db/index')();
    return require('./../models/user.model')(sequelize);
};
var User = temp();

exports.register = async (req, res) =>{
    try{
        const nickname = req.body.nickname;
        const password = req.body.password;
        const profileDescription = req.body.profile_description;
        const email = req.body.email;
        const country = req.body.country;
        let passHash = await bcryptjs.hash(password, 8);
        (await User).create({
            nickname : nickname,
            password : passHash,
            profile_description : profileDescription,
            email : email,
            country : country
        }).then(result => {
            res.send("REGISTRADO CORRECTAMENTE "+result)
            console.log(result);
        }).catch(err => {
            res.send("ERROR")
            console.log(err);
        })
    }catch(error){
        res.send("ERROR")
        console.log(error);
    }
}