'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_game_histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      player: {
        type: Sequelize.STRING
      },
      bot: {
        type: Sequelize.STRING
      },
      hasil: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATEONLY
      },
      time: {
        type: Sequelize.TIME
      },
      userId: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references:{
          model: {
            tableName: 'user_games',
            schema: 'public'
          },
          key: 'id'
        },
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_game_histories');
  }
};