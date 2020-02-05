const express = require('express')
const usersController = require('../controllers/users')
const router = express.Router()



router.get('/, /:id, firstname/:first_name', (req, res) => {
  res.send('getting employees...')
})

module.exports = router