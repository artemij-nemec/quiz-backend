'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Branch, { foreignKey: 'branch_id', targetKey: 'id' });
      this.hasMany(models.Answer, { foreignKey: 'question_id' });
    }
  };
  Question.init({
    order: DataTypes.INTEGER,
    branch_id: DataTypes.INTEGER,
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
