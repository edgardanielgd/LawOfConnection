const { Model, DataTypes } = require('sequelize');

class Country extends Model { }

module.exports = ( sequelize ) => {
  Country.init({
    idCountry: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    cntName: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Country',
  });
  return Country;
};