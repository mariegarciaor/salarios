const SalaryData = require("../models/salaryData");

const handleResponse = (res, result) => {
  if (result instanceof Error) {
    return res.status(500).json({ error: result.message });
  }
  return res.status(200).json(result);
};

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await SalaryData.findAll();
    handleResponse(res, ALL);
  } catch (error) {
    handleResponse(res, error);
  }
};

// exports.getOne = async (req, res, next) => {
//   try {
//     const salaries = await SalaryData.findByPk(req.params.id);
//     handleResponse(res, salaries);
//   } catch (error) {
//     handleResponse(res, error);
//   }
// };