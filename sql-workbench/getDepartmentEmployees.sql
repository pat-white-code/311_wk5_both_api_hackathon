SELECT last_name, first_name, employees.emp_no, dept_name
FROM employees
JOIN dept_emp ON employees.emp_no = dept_emp.emp_no
JOIN departments ON departments.dept_no = dept_emp.dept_no
WHERE dept_emp.to_date = '9999-01-01'
	AND departments.dept_no = "d002"
ORDER BY last_name;

-- SELECT *
-- FROM dept_emp
-- JOIN departments
-- 	ON departments.dept_no = dept_emp.dept_no;
    
    