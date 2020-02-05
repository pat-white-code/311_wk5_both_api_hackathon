const mysql = require('mysql');
const pool = require('../mysql/connection');
const getEmployees = require('./modules/employees/getEmployees');
const getEmployeeById = require('./modules/employees/getEmployeeById');

// Update the getEmployees function so that it calls the database, selecting all fields from the employees table but limiting the results to 50. Use res.json to return the results to the user

module.exports = {
  getEmployees,
  getEmployeeById
}