module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Participation', {
        role : {
          type: DataTypes.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        UserId:{
          type: Sequelize.INTEGER,
          references:{
            model: "User",
            key: "id"
          }
        },
        ProjectId:{
          type: Sequelize.INTEGER,
          references:{
            model: "Project",
            key: "id"
          }
        }
      });
    },
    async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('Participation');
    }
  };