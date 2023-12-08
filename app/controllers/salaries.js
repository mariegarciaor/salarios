const Salary = require("../models/salary");

const handleResponse = (res, result) => {
  if (result instanceof Error) {
    return res.status(500).json({ error: result.message });
  }
  return res.status(200).json(result);
};

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Salary.findAll();
    handleResponse(res, ALL);
  } catch (error) {
    handleResponse(res, error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const salaries = await Salary.findByPk(req.params.id);
    handleResponse(res, salaries);
  } catch (error) {
    handleResponse(res, error);
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const SALARY_MODEL = {
      role: req.body.role,
      email: req.body.email,
      password: req.body.password,
    };

    const salary = await Salary.create(SALARY_MODEL);
    handleResponse(res, salary);
  } catch (error) {
    handleResponse(res, error);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const SALARY_MODEL = {
      role: req.body.role,
      email: req.body.email,
      password: req.body.password,
    };

    const [updatedRows] = await Salary.update(SALARY_MODEL, {
      where: { id: req.params.id },
    });
    if (updatedRows === 0) {
      return handleResponse(res, new Error("Usuario no encontrado"));
    }

    handleResponse(res, { message: "Usuario actualizado exitosamente" });
  } catch (error) {
    handleResponse(res, error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const deletedRows = await Salary.destroy({ where: { id: req.params.id } });

    if (deletedRows === 0) {
      return handleResponse(res, new Error("Usuario no encontrado"));
    }

    handleResponse(res, { message: "Usuario eliminado exitosamente" });
  } catch (error) {
    handleResponse(res, error);
  }
};
