const { Model, DataTypes } = require('sequelize');

class TeamParticipation extends Model { }

module.exports = ( sequelize ) => {
  TeamParticipation.init({
    role : {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'TeamParticipation',
  });
  return TeamParticipation;
};