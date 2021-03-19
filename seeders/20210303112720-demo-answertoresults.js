'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('AnswerToResults', [
      {
        answer_id: 1,
        result_id: 1
      },
      {
        answer_id: 2,
        result_id: 1
      },
      {
        answer_id: 2,
        result_id: 4
      },
      {
        answer_id: 2,
        result_id: 2
      },
      {
        answer_id: 2,
        result_id: 3
      },
      {
        answer_id: 3,
        result_id: 4
      },
      {
        answer_id: 3,
        result_id: 2
      },
      {
        answer_id: 4,
        result_id: 3
      },
      {
        answer_id: 5,
        result_id: 3
      },
      {
        answer_id: 6,
        result_id: 3
      },
      {
        answer_id: 6,
        result_id: 4
      },
      {
        answer_id: 6,
        result_id: 2
      },
      {
        answer_id: 6,
        result_id: 1
      },
      {
        answer_id: 7,
        result_id: 4
      },
      {
        answer_id: 7,
        result_id: 2
      },
      {
        answer_id: 8,
        result_id: 1
      },
      {
        answer_id: 9,
        result_id: 3
      },
      {
        answer_id: 9,
        result_id: 1
      },
      {
        answer_id: 10,
        result_id: 3
      },
      {
        answer_id: 10,
        result_id: 1
      },
      {
        answer_id: 10,
        result_id: 2
      },
      {
        answer_id: 10,
        result_id: 4
      },
      {
        answer_id: 11,
        result_id: 2
      },
      {
        answer_id: 12,
        result_id: 4
      },
      {
        answer_id: 13,
        result_id: 3
      },
      {
        answer_id: 14,
        result_id: 1
      },
      {
        answer_id: 15,
        result_id: 2
      },
      {
        answer_id: 16,
        result_id: 4
      },
      {
        answer_id: 17,
        result_id: 3
      },
      {
        answer_id: 17,
        result_id: 2
      },
      {
        answer_id: 18,
        result_id: 4
      },
      {
        answer_id: 19,
        result_id: 3
      },
      {
        answer_id: 19,
        result_id: 2
      },
      {
        answer_id: 19,
        result_id: 4
      },
      {
        answer_id: 19,
        result_id: 1
      },
      {
        answer_id: 20,
        result_id: 1
      },
      {
        answer_id: 21,
        result_id: 5
      },
      {
        answer_id: 22,
        result_id: 7
      },
      {
        answer_id: 22,
        result_id: 6
      },
      {
        answer_id: 23,
        result_id: 8
      },
      {
        answer_id: 24,
        result_id: 5
      },
      {
        answer_id: 25,
        result_id: 6
      },
      {
        answer_id: 26,
        result_id: 7
      },
      {
        answer_id: 27,
        result_id: 8
      },
      {
        answer_id: 28,
        result_id: 5
      },
      {
        answer_id: 29,
        result_id: 6
      },
      {
        answer_id: 30,
        result_id: 7
      },
      {
        answer_id: 31,
        result_id: 8
      },
      {
        answer_id: 32,
        result_id: 7
      },
      {
        answer_id: 32,
        result_id: 5
      },
      {
        answer_id: 33,
        result_id: 6
      },
      {
        answer_id: 34,
        result_id: 8
      },
      {
        answer_id: 35,
        result_id: 5
      },
      {
        answer_id: 36,
        result_id: 6
      },
      {
        answer_id: 37,
        result_id: 7
      },
      {
        answer_id: 38,
        result_id: 8
      },
      {
        answer_id: 39,
        result_id: 9
      },
      {
        answer_id: 40,
        result_id: 10
      },
      {
        answer_id: 41,
        result_id: 11
      },
      {
        answer_id: 42,
        result_id: 12
      },
      {
        answer_id: 43,
        result_id: 9
      },
      {
        answer_id: 44,
        result_id: 10
      },
      {
        answer_id: 45,
        result_id: 11
      },
      {
        answer_id: 46,
        result_id: 12
      },
      {
        answer_id: 47,
        result_id: 9
      },
      {
        answer_id: 48,
        result_id: 10
      },
      {
        answer_id: 49,
        result_id: 11
      },
      {
        answer_id: 50,
        result_id: 12
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AnswerToResults', null, {});
  }
};
