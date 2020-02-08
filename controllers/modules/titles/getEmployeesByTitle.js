const pool = require('../../../mysql/connection');
const mysql = require('mysql');


const getEmployeesByTitle = (req, res) => {
  let includeDept = `, departments.dept_name`

  if (req.query.include_dept === "false") {
    includeDept = ``;
  }

  let sql = `
  SELECT first_name, last_name, employees.emp_no, title ${includeDept}
  FROM employees
  JOIN titles
    ON employees.emp_no = titles.emp_no
  JOIN dept_emp
    ON employees.emp_no = dept_emp.emp_no
  JOIN departments
    ON dept_emp.dept_no = departments.dept_no
  WHERE titles.to_date = "9999-01-01"
    AND 
  title = ?
  LIMIT 1000;`; 

  let replacements = [req.params.title];

  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, rows)=> {
    if (err) {
    res.status(500).send('ERROR : ' + err)
    }
    res.json(rows);
  })
}

module.exports = getEmployeesByTitle;