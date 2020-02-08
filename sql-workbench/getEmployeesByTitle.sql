SELECT first_name, last_name, employees.emp_no, title, departments.dept_name
FROM employees
JOIN titles
	ON employees.emp_no = titles.emp_no
JOIN dept_emp
	ON employees.emp_no = dept_emp.emp_no
JOIN departments
	ON dept_emp.dept_no = departments.dept_no
WHERE titles.to_date = "9999-01-01"
	AND 
	title = "Senior Engineer"
-- WHERE to_date > '1986-01-01' AND to_date < '1995-01-01'
ORDER BY employees.emp_no;