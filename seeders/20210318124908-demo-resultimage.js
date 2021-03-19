'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ResultImages', [
      {
        result_id: 1,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/cars/results/sport/1.jpeg'
      },
      {
        result_id: 1,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/cars/results/sport/2.jpeg'
      },
      {
        result_id: 1,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/cars/results/sport/3.jpeg'
      },
      {
        result_id: 1,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/cars/results/sport/4.jpeg'
      },
      {
        result_id: 1,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/cars/results/sport/5.jpeg'
      },
      {
        result_id: 1,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/cars/results/sport/6.jpeg'
      },
      {
        result_id: 1,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/cars/results/sport/7.jpeg'
      },
      {
        result_id: 1,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/cars/results/sport/8.jpeg'
      },
      {
        result_id: 1,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/cars/results/sport/9.jpeg'
      },
      {
        result_id: 1,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/cars/results/sport/10.jpeg'
      },
      {
        result_id: 2,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/cars/results/suv/suv.jpeg'
      },
      {
        result_id: 2,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/cars/results/suv/suv2.jpeg'
      },
      {
        result_id: 3,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/cars/results/truck/truck.jpeg'
      },
      {
        result_id: 3,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/cars/results/truck/truck2.jpeg'
      },
      {
        result_id: 4,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/cars/results/family/family_car.jpeg'
      },
      {
        result_id: 4,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/cars/results/family/familycar2.jpeg'
      },
      {
        result_id: 5,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/animals/results/sea%2Bcreatures.jpg'
      },
      {
        result_id: 5,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/animals/results/sea2.jpg'
      },
      {
        result_id: 6,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/animals/results/birds.jpg'
      },
      {
        result_id: 6,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/animals/results/bird2.jpg'
      },
      {
        result_id: 7,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/animals/results/reptiles.jpg'
      },
      {
        result_id: 7,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/animals/results/snake2.jpg'
      },
      {
        result_id: 8,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/animals/results/mammals.jpg'
      },
      {
        result_id: 8,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/animals/results/dog2.jpg'
      },
      {
        result_id: 9,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/people/results/soldier.jpg'
      },
      {
        result_id: 9,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/people/results/soldier2.jpg'
      },
      {
        result_id: 10,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/people/results/builder.jpg'
      },
      {
        result_id: 10,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/people/results/builder2.jpg'
      },
      {
        result_id: 11,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/people/results/doctor.jpg'
      },
      {
        result_id: 11,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/people/results/doctor2.jpg'
      },
      {
        result_id: 12,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/people/results/sportsman.jpg'
      },
      {
        result_id: 12,
        image: 'https://quiz-bucket-test.s3.eu-central-1.amazonaws.com/people/results/sportsman2.jpg'
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ResultImages', null, {});
  }
};
