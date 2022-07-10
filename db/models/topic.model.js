const { Model, DataTypes } = require('sequelize');

class Topic extends Model { }

module.exports = ( sequelize ) => {
  Topic.init({
    idTopic: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    tpcName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    tpcHTMLBody: {
      allowNull: true,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};