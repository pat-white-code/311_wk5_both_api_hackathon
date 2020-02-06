const pool = require('../../../mysql/connection');
const mysql = require('mysql');


const getEmployeesByFirstName = (req, res) => {
  let sql = 'SELECT * FROM employees WHERE first_name = ?;';
  let replacements = [req.params.first_name];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows)=> {
    if(err) {
      return res.status(500).send('Error: '+ err);
    }
    return res.json(rows);
  })}

  module.exports = getEmployeesByFirstName;