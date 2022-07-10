module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Project', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        date_of_creation: {
          type: Sequelize.DATE
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        FieldId:{
          type: Sequelize.INTEGER,
          references:{
            model: "Field",
            key: "id"
          }
        }
      });
    },
    async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('User');
    }
  };