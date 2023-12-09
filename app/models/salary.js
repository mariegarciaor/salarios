const { DataTypes } = require("sequelize");
const db = require("../util/database");

const Salary = db.define(
  "salary",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    net_salary: {
      type: DataTypes.DECIMAL(10, 2),
    },
    job_role: {
      type: DataTypes.STRING(100),
    },
    seniority_in_years: {
      type: DataTypes.INTEGER,
    },
    tech_stack: {
      type: DataTypes.JSON,
    },
    company_size: {
      type: DataTypes.STRING(50),
    },
    location: {
      type: DataTypes.STRING(100),
    },
    english: {
      type: DataTypes.BOOLEAN,
    },
    max_education_level: {
      type: DataTypes.STRING(100),
    },
    working_hours_per_week: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "salaries", 
    timestamps: false, 
  }
);

module.exports = Salary;
