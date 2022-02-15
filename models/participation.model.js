const { Model, DataTypes } = require('sequelize');

class Participation extends Model { }

module.exports = ( sequelize ) => {
  Participation.init({
    role : {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Participation',
  });
  return Participation;
};