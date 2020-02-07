const getSalariesByMin = require('./modules/salaries/getSalariesByMin');
const getSalaryById = require('./modules/salaries/getSalaryById');

// This file acts as a funnel to collect all of the modules and export them in one controller file for reference by the router.

module.exports = {
  getSalariesByMin,
  getSalaryById
}