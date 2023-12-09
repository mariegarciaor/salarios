DROP TABLE temp_monthly_salaries;
CREATE TABLE temp_monthly_salaries AS 
SELECT id, 
       CAST((net_salary / (working_hours_per_week * 4)) * 160 AS DECIMAL(12, 2)) AS calc_monthly_salary
FROM brechacero.salaries;

select * from temp_monthly_salaries;

-- Modificamos la tabla original
ALTER TABLE brechacero.salaries
MODIFY COLUMN monthly_salary DECIMAL(12, 2);

select * from brechacero.salaries sal
left join temp_monthly_salaries temp on sal.id = temp.id;

CREATE TABLE salary_data AS
select distinct job_role, english,
CASE 
    WHEN seniority_in_years >= 4 THEN 'Senior'
    WHEN seniority_in_years >= 2 THEN 'Middle'
    WHEN seniority_in_years <= 1 THEN 'Junior'
    ELSE 'Other Seniority' 
END AS seniority_group,
CAST(MAX(calc_monthly_salary) AS DECIMAL(12, 2)) AS max_salary, 
CAST(MIN(calc_monthly_salary) AS DECIMAL(12, 2)) AS min_salary, 
CAST(AVG(calc_monthly_salary) AS DECIMAL(12, 2)) AS mean_salary
from brechacero.salaries sal
left join temp_monthly_salaries temp on sal.id = temp.id
GROUP BY job_role,seniority_group, english
ORDER BY job_role;

select * from salary_data;