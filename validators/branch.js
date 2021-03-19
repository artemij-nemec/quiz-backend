const { param } = require('express-validator');

module.exports = function brunchValidationRules() {
  return [
    param('id', 'Invalid Quiz ID').exists().toInt().isInt()
  ];
}
