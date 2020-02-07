const mysql = require('mysql');
const pool = require('../mysql/connection');
const getDepartment = require('./modules/departments/getDepartment');

// This file acts as a funnel to collect all of the modules and export them in one controller file for reference by the router.

module.exports = {
  getDepartment,
  
}