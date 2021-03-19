const { validationResult } = require('express-validator');

module.exports = function validate(req, res, next) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ message: err.msg }));

  return res.status(422).json({
    success: false,
    message: extractedErrors[0].message
  });
}
