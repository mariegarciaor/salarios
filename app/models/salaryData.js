const { DataTypes } = require("sequelize");
const db = require("../util/database");

const SalaryData = db.define(
  "salaryData",
  {
    salary_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    job_role: {
      type: DataTypes.STRING(100),
    },
    english: {
      type: DataTypes.BOOLEAN,
    },
    seniority_groups: {
      type: DataTypes.INTEGER,
    },
    max_salary: {
      type: DataTypes.INTEGER,
    },
    min_salary: {
      type: DataTypes.INTEGER,
    },
    mean_salary: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "salary_data",
    timestamps: false,
  }
);

module.exports = SalaryData;
