const express = require('express');
const router = express.Router();
const controller = require('../controllers/titles');

router.get('/', controller.getTitles);
router.get('/:title', controller.getEmployeesByTitle);

module.exports = router;