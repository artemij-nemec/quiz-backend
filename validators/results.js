const { body } = require('express-validator');

module.exports = function resultValidationRules() {
  return [
    body('answers', 'Invalid answers').isArray().notEmpty(),
    body('answers.*', 'Invalid answers').isInt()
  ];
}
