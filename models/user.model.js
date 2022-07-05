const { Model, DataTypes } = require('sequelize');

class User extends Model { }

module.exports = ( sequelize ) => {
  User.init({
    idUser: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    usrNickname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    usrProfileDescription: {
      type: DataTypes.STRING
    },
    usrEmail: {
      type: DataTypes.STRING
    },
    usrFirstName: {
      type: DataTypes.STRING
    },
    usrLastName: {
      type: DataTypes.STRING
    },
    usrPassword: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};