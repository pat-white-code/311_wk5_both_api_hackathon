const express = require('express')
const router = express.Router()
const controller = require('../controllers/modules/departments');



// router.get('/, /:id, firstname/:first_name', (req, res) => {
//   res.send('getting employees...')
// })

router.get('/', controller.departments);



module.exports = router