const { Sequelize } = require('sequelize');
const db = require('../models');
const { DBError } = require('../utils/errors');
const Branches = db.Branch;
const Answers = db.Answer;
const Questions = db.Question;
const Results = db.Result;
const ResultImages = db.ResultImage;

class BranchService {
  constructor() { }

  async getBranches() {
    try {
      const result = await Branches.findAll({
        raw: true
      })
      return {
        success: true,
        result
      };
    } catch (error) {
      throw new DBError();
    }
  };

  async getBranch({ id }) {
    try {
      const result = await Branches.findOne({
        order: [[{ model: Questions }, 'order', 'asc']],
        include: [{
          model: Questions,
          include: Answers
        }],
        where: { id }
      })
      return {
        success: true,
        result
      };
    } catch (error) {
      throw new DBError();
    }
  };

  async getResults({ answers }) {
    try {
      let result = await Results.findOne({
        attributes: [
          'id',
          'description',
          [Sequelize.fn('COUNT', Sequelize.col('Answers.id')), 'answer_count']
        ],
        includeIgnoreAttributes: false,
        include: [
          {
            model: Answers,
            where: {
              id: { [Sequelize.Op.in]: answers }
            },
            attributes: []
          }
        ],
        group: ['Result.id'],
        order: [[Sequelize.literal('answer_count'), 'DESC']],
        subQuery: false,
        raw: true
      });
      if (!result) {
        result = {
          description: 'No matching results'
        };
      }
      const images = await ResultImages.findAll({
        attributes: ['id', 'image'],
        where: { result_id: result.id },
        raw: true
      })
      result.images = images;

      return {
        success: true,
        result
      };
    } catch (error) {
      throw new DBError();
    }
  };
}

module.exports = BranchService;
