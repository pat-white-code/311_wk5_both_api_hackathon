const mysql = require('mysql');
const pool = require('../mysql/connection');

// Update the getEmployees function so that it calls the database, selecting all fields from the employees table but limiting the results to 50. Use res.json to return the results to the user

const getEmployees = (req, res) => {
  pool.query('SELECT * FROM employees LIMIT 50', (err, rows)=> {
    if(err) {
      return res.status(500).send('Error: '+err);
    }
    return res.json(rows);
  })}

  module.exports(getEmployees);