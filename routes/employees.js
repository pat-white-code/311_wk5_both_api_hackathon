const express = require('express')
const router = express.Router()
const controller = require('../controllers/employees');



// router.get('/, /:id, firstname/:first_name', (req, res) => {
//   res.send('getting employees...')
// })
router.get('/:id', controller.getEmployeeById);
router.get('/', controller.getEmployees);
// router.put('/', controller.getEmployees)
// router.put('/:id', controller.getEmployeesById)
router.get('/first_name/:first_name', controller.getEmployeesByFirstName);
router.get('/last_name/:last_name', controller.getEmployeesByLastName);


module.exports = router