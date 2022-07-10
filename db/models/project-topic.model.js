const { Model, DataTypes } = require('sequelize');

class TopicApplication extends Model { }

module.exports = ( sequelize ) => {
  TopicApplication.init({
    applicationDescription : {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'TopicApplication',
  });
  return TopicApplication;
};