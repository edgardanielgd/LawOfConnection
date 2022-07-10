module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Comment', {
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
      await queryInterface.dropTable('Comment');
    }
  };