const express = require('express')
const router = express.Router()
const controller = require('../controllers/departments');



// router.get('/, /:id, firstname/:first_name', (req, res) => {
//   res.send('getting employees...')
// })

router.get('/', controller.getDepartment);



module.exports = router