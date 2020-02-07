const getDepartment = require('./modules/departments/getDepartment');
const getDepartmentEmployees = require('./modules/departments/getDepartmentEmployees');

// This file acts as a funnel to collect all of the modules and export them in one controller file for reference by the router.

module.exports = {
  getDepartment,
  getDepartmentEmployees
}