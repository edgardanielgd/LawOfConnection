const { Model, DataTypes } = require('sequelize');

class Comment extends Model { }

module.exports = ( sequelize ) => {
  Comment.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.STRING
    },
    footer: {
      type: DataTypes.STRING
    },
    date_of_creation: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};