const { Model, DataTypes } = require('sequelize');

class Team extends Model { }

module.exports = ( sequelize ) => {
  Team.init({
    idTeam: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    teamName: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};