const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const getTitles = (req, res) => {
  let sql = `SELECT DISTINCT title
  FROM titles;`

  pool.query(sql, (err, rows) => {
    if (err) {
      return res.status(500).send('Error: ' + err)
    }
    return res.json(rows)
  })
};

module.exports = getTitles;