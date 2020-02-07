const express = require('express')
const router = express.Router()
const controller = require('../controllers/salaries');

router.get('/', controller.getSalariesByMin);
router.get('/employees/:id', controller.getSalaryById);
router.get('/employees/:id/history', controller.getSalaryHistoryById);


module.exports = router