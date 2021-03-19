'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Branches', [
      {
        name: 'Cars',
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/main/cars.jpg'
      },
      {
        name: 'Animals',
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/main/animals.jpg'
      },
      {
        name: 'People',
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/main/people.jpg'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Branches', null, {});
  }
};
