const express = require('express')
const router = express.Router()
const controller = require('../controllers/employees');



// router.get('/, /:id, firstname/:first_name', (req, res) => {
//   res.send('getting employees...')
// })
router.get('/:id', controller.getEmployeeById);
// router.get('/:first_name', controller.getUserByfirst_name)
router.get('/', controller.getEmployees);
router.put('/:first_name', controller.getEmployeesByFirstName);
// router.put('/', controller.getEmployees)
// router.put('/:id', controller.getEmployeesById)


module.exports = router