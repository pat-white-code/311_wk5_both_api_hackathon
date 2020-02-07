const mysql = require('mysql');
const pool = require('../mysql/connection');
const getEmployees = require('./modules/employees/getEmployees');
const getEmployeeById = require('./modules/employees/getEmployeeById');
const getEmployeesByFirstName = require('./modules/employees/getEmployeesByFirstName');
const getEmployeesByLastName = require('./modules/employees/getEmployeesByLastName');

// This file acts as a funnel to collect all of the modules and export them in one controller file for reference by the router.

module.exports = {
  getEmployees,
  getEmployeeById,
  getEmployeesByFirstName,
  getEmployeesByLastName
}