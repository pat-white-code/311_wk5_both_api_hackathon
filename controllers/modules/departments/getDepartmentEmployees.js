const pool = require('../../../mysql/connection');
const mysql = require('mysql');

// Get all current employees at a requested department

const getDepartmentEmployees = (req, res) => {

  let sql = `
    SELECT last_name, first_name, employees.emp_no, dept_name
    FROM employees
    JOIN dept_emp ON employees.emp_no = dept_emp.emp_no
    JOIN departments ON departments.dept_no = dept_emp.dept_no
    WHERE dept_emp.to_date = '9999-01-01'
      AND departments.dept_no = ?
    ORDER BY last_name;
  `;

  let replacements = [req.params.deptNo]

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows)=> {
    if(err) {
      return res.status(500).send('Error: '+ err);
    }
    return res.json(rows) ;
  })}

  module.exports = getDepartmentEmployees;