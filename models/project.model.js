const { Model, DataTypes } = require('sequelize');

class Project extends Model { }

module.exports = ( sequelize) => {
  Project.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    date_of_creation: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};