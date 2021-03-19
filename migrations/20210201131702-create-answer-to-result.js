'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AnswerToResults', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      answer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Answers',
          key: 'id'
        }
      },
      result_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Results',
          key: 'id'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AnswerToResults');
  }
};