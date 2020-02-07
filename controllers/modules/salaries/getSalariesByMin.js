const pool = require('../../../mysql/connection');
const mysql = require('mysql');

// Update the getEmployees function so that it calls the database, selecting all fields from the employees table but limiting the results to 50. Use res.json to return the results to the user

const getSalariesByMin = (req, res) => {
  let sql = `
  SELECT employees.emp_no, MIN(first_name), MIN(last_name), MAX(from_date), MAX(salary)
  FROM employees 
  JOIN salaries 
    ON salaries.emp_no = employees.emp_no
  GROUP BY employees.emp_no
  HAVING MAX(salary) > ?
  ORDER BY MAX(salary) DESC
  LIMIT 100;
  `;
  let replacements = [req.query.min_sal];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows)=> {
    if(err) {
      return res.status(500).send('Error: '+ err);
    }
    return res.json(rows) ;
  })}

  module.exports = getSalariesByMin;