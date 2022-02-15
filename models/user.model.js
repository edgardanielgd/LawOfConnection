const { Model, DataTypes } = require('sequelize');

class User extends Model { }

module.exports = ( sequelize ) => {
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nickname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    profile_description: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    country: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};