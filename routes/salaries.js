const express = require('express')
const router = express.Router()
const controller = require('../controllers/salaries');

router.get('/', controller.getSalariesByMin);


module.exports = router