const { Model, DataTypes } = require('sequelize');

class Project extends Model { }

module.exports = ( sequelize) => {
  Project.init({
    idProject: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    pryName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    pryDescription: {
      type: DataTypes.STRING
    },
    pryPoints: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};