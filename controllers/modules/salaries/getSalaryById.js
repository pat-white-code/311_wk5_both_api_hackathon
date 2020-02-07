const pool = require('../../../mysql/connection');
const mysql = require('mysql');

// Return the employee by id with salary information
// There should be a property on the employee object called salary with a number value

const getSalaryById = (req, res) => {

  let sql = `
    SELECT * 
    FROM employees
    JOIN salaries
      ON employees.emp_no = salaries.emp_no
    WHERE employees.emp_no = ?
    ORDER BY from_date DESC
    LIMIT 1;
  `;

  let replacements = [req.params.id]

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows)=> {
    if(err) {
      return res.status(500).send('Error: '+ err);
    }
    return res.json(rows) ;
  })}

  module.exports = getSalaryById;