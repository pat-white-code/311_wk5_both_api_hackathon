const mysql = require('mysql');
const pool = require('../../../mysql/connection');

// Update the getDepartments function so that it calls the database, selecting all fields from the employees table but limiting the results to 50. Use res.json to return the results to the user

const getDepartments = (req, res) => {
  pool.query('SELECT * FROM departments LIMIT 50', (err, rows)=> {
    if(err) {
      return res.status(500).send('Error: '+err);
    }
    return res.json(rows);
  })}

  module.exports = getDepartments;