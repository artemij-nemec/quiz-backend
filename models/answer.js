'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Question, { foreignKey: 'question_id', targetKey: 'id' });
      this.belongsToMany(models.Result, { through: 'AnswerToResult', foreignKey: 'answer_id' });
    }
  };
  Answer.init({
    question_id: DataTypes.INTEGER,
    text: DataTypes.STRING,
    image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};