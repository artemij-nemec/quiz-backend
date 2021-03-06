'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Questions', [
      {
        order: 1,
        branch_id: 1,
        text: 'Does your car have to be fast?'
      },
      {
        order: 2,
        branch_id: 1,
        text: 'Should your car be roomy?'
      },
      {
        order: 3,
        branch_id: 1,
        text: 'Your budget?'
      },
      {
        order: 4,
        branch_id: 1,
        text: 'What features do you want in your car?'
      },
      {
        order: 5,
        branch_id: 1,
        text: 'Is safety in the car important to you?'
      },
      {
        order: 1,
        branch_id: 2,
        text: 'How were you born?'
      },
      {
        order: 2,
        branch_id: 2,
        text: 'Where do you live?'
      },
      {
        order: 3,
        branch_id: 2,
        text: 'What are your limbs?'
      },
      {
        order: 4,
        branch_id: 2,
        text: 'What is your skin?'
      },
      {
        order: 5,
        branch_id: 2,
        text: 'What is your special ability?'
      },
      {
        order: 1,
        branch_id: 3,
        text: 'What would you like to do?'
      },
      {
        order: 2,
        branch_id: 3,
        text: 'What salary do you want?'
      },
      {
        order: 3,
        branch_id: 3,
        text: 'What\'s your education?'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
