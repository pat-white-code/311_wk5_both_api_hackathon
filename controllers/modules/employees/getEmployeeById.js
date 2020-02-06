const pool = require('../../../mysql/connection');
const mysql = require('mysql');

// Update the getEmployees function so that it calls the database, selecting all fields from the employees table but limiting the results to 50. Use res.json to return the results to the user

const getEmployeeById = (req, res) => {
  let sql = 'SELECT * FROM employees WHERE emp_no = ? LIMIT 1;';
  let replacements = [req.params.id];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows)=> {
    if(err) {
      return res.status(500).send('Error: '+ err);
    }
    return res.json(rows);
  })}

  module.exports = getEmployeeById;