const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController');
const resultValidationRules = require('../validators/results');
const brunchValidationRules = require('../validators/branch');
const validate = require('../validators/validate');

router.get('/branches', controller.getBranches);
router.get('/branch/:id', brunchValidationRules(), validate, controller.getBranch);
router.post('/results', resultValidationRules(), validate, controller.getResults);

module.exports = router;
