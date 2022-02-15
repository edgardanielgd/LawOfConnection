const { Model, DataTypes } = require('sequelize');

class Field extends Model { }

module.exports = ( sequelize ) => {
  Field.init({
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
  }, {
    sequelize,
    modelName: 'Field',
  });
  return Field;
};