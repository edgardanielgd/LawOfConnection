const { Model, DataTypes } = require('sequelize');

class Field extends Model { }

module.exports = ( sequelize ) => {
  Field.init({
    idField: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    fldName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    fldDescription: {
      allowNull: true,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Field',
  });
  return Field;
};