const pool = require('../../../mysql/connection');
const mysql = require('mysql');


const getEmployeesByLastName = (req, res) => {
  let sql = 'SELECT * FROM employees WHERE last_name = ?;';
  let replacements = [req.params.last_name];
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, rows)=> {
    if(err) {
      return res.status(500).send('Error: '+ err);
    }
    return res.json(rows);
  })}

  module.exports = getEmployeesByLastName;