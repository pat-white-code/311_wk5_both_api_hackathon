const pool = require('../../../mysql/connection');
const mysql = require('mysql');

// To return an employees salary history by their id

const getSalaryHistoryById = (req, res) => {

  // let direction = 'DESC';

  // if(req.query.order="asc") { direction = ``};

  let sql = `
  SELECT from_date, to_date, salary
  FROM employees
  JOIN salaries
    ON employees.emp_no = salaries.emp_no
  WHERE employees.emp_no = ? 
  ORDER BY from_date DESC;
  `;

  if(req.query.order === "asc") {
    sql = sql.replace(/DESC/g, '')
  }

  let replacements = [req.params.id]

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows)=> {
    if(err) {
      return res.status(500).send('Error: '+ err);
    }
    return res.json(rows) ;
  })}

  module.exports = getSalaryHistoryById;