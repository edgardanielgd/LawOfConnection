const { Model, DataTypes } = require('sequelize');

class Comment extends Model { }

module.exports = ( sequelize ) => {
  Comment.init({
    idComentario: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    cmtTitle: {
      allowNull: false,
      type: DataTypes.STRING
    },
    cmtBody: {
      type: DataTypes.STRING
    },
    cmtFooter: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};