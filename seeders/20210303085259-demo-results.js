'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Results', [
      {
        branch_id: 1,
        description: 'Your choice is about sport cars'
      },
      {
        branch_id: 1,
        description: 'Your choice is a SUV'
      },
      {
        branch_id: 1,
        description: 'Your choice is a truck'
      },
      {
        branch_id: 1,
        description: 'Your choice is a family car'
      },
      {
        branch_id: 2,
        description: 'You are a sea creature'
      },
      {
        branch_id: 2,
        description: 'You are a bird'
      },
      {
        branch_id: 2,
        description: 'You are a reptile'
      },
      {
        branch_id: 2,
        description: 'You are a pet'
      },
      {
        branch_id: 3,
        description: 'You are a soldier'
      },
      {
        branch_id: 3,
        description: 'You are a builder'
      },
      {
        branch_id: 3,
        description: 'You are a doctor'
      },
      {
        branch_id: 3,
        description: 'You are a sportsman'
      },
      {
        description: 'No matching results'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Results', null, {});
  }
};
