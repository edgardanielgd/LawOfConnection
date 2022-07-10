const Joi = require("joi");

const nickname = Joi.string().min(3).max(20);
const password = Joi.string().pattern( new RegExp("^[a-zA-Z0-9]{4,20}$"));
const profile_description = Joi.string().max(256);
const email = Joi.string().email();
const countryID = Joi.number().integer();

const UserRegister = Joi.object({
    nickname: nickname.required(),
    password: password.required(),
    profile_description: profile_description.required(),
    email : email.required(),
    countryID : countryID.required()
});

const UserRegisterRefactor = {
    nickname : "usrNickname",
    password : "usrPassword",
    profile_description : "usrProfileDescription",
    email: "usrEmail",
    countryID : "idCountry"

}

const UserLogin = Joi.object({
    nickname: nickname.required(),
    password : password.required()
});

module.exports = { UserRegister, UserLogin, UserRegisterRefactor }
