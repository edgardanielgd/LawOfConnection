const { Model, DataTypes } = require('sequelize');

class Reaction extends Model { }

module.exports = ( sequelize ) => {
  Reaction.init({
    idReaction: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    rctType: {
      allowNull: false,
      type: DataTypes.ENUM( "like" , "dislike", "star")
    }
  }, {
    sequelize,
    modelName: 'Reaction',
  });
  return Reaction;
};