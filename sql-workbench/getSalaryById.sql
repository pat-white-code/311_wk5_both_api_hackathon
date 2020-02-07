SELECT * 
FROM employees
JOIN salaries
	ON employees.emp_no = salaries.emp_no
WHERE employees.emp_no = 10001 
ORDER BY from_date DESC
LIMIT 1;

-- CODE:  
-- SELECT * 
-- FROM employees
-- JOIN salaries
-- 	ON employees.emp_no = salaries.emp_no
-- WHERE employees.emp_no = ? //
-- ORDER BY from_date DESC
-- LIMIT 1;