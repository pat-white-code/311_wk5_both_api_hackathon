const express = require('express');
const router = express.Router();
const controller = require('../controllers/titles');

router.get('/', controller.getTitles);

module.exports = router;