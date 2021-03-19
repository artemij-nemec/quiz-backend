'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Branch, { foreignKey: 'branch_id', targetKey: 'id' });
      this.belongsToMany(models.Answer, { through: 'AnswerToResult', foreignKey: 'result_id' });
      this.hasMany(models.ResultImage, { foreignKey: 'result_id' });
    }
  };
  Result.init({
    branch_id: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Result',
  });
  return Result;
};
