DROP TABLE temp_monthly_salaries;
CREATE TABLE temp_monthly_salaries AS 
SELECT id, 
       CAST((net_salary / (working_hours_per_week * 4)) * 160 AS DECIMAL(12, 2)) AS calc_monthly_salary
FROM brechacero.salaries;

SELECT * FROM temp_monthly_salaries;

-- Modificamos la tabla original
ALTER TABLE brechacero.salaries
MODIFY COLUMN monthly_salary DECIMAL(12, 2);

SELECT * FROM brechacero.salaries sal
LEFT JOIN temp_monthly_salaries temp ON sal.id = temp.id;

CREATE TABLE salary_data AS
SELECT DISTINCT job_role, english,
CASE 
    WHEN seniority_in_years >= 4 THEN 'Senior'
    WHEN seniority_in_years >= 2 THEN 'Middle'
    WHEN seniority_in_years <= 1 THEN 'Junior'
    ELSE 'Other Seniority' 
END AS seniority_group,
CAST(MAX(calc_monthly_salary) AS DECIMAL(12, 2)) AS max_salary, 
CAST(MIN(calc_monthly_salary) AS DECIMAL(12, 2)) AS min_salary, 
CAST(AVG(calc_monthly_salary) AS DECIMAL(12, 2)) AS mean_salary
FROM brechacero.salaries sal
LEFT JOIN temp_monthly_salaries temp ON sal.id = temp.id
GROUP BY job_role,seniority_group, english
ORDER BY job_role;

SELECT * FROM salary_data;
