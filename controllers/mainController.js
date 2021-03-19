const BranchService = require('../services/BranchService');
const BranchServiceInstance = new BranchService();

const controller = {};

controller.getBranches = async (req, res, next) => {
  try {
    const branches = await BranchServiceInstance.getBranches();
    return res.send(branches);
  } catch (error) {
    next(error)
  }
}

controller.getBranch = async (req, res, next) => {
  try {
    const branch = await BranchServiceInstance.getBranch(req.params);
    return res.send(branch);
  } catch (error) {
    next(error)
  }
}

controller.getResults = async (req, res, next) => {
  try {
    const result = await BranchServiceInstance.getResults(req.body);
    return res.send(result);
  } catch (error) {
    next(error)
  }
}

module.exports = controller;
