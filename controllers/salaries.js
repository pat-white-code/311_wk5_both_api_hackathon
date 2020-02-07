const getSalariesByMin = require('./modules/salaries/getSalariesByMin');
const getSalaryById = require('./modules/salaries/getSalaryById');
const getSalaryHistoryById = require('./modules/salaries/getSalaryHistoryById');

// This file acts as a funnel to collect all of the modules and export them in one controller file for reference by the router.

module.exports = {
  getSalariesByMin,
  getSalaryById,
  getSalaryHistoryById
}