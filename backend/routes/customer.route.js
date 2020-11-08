var express = require('express');
const customers = require('../controllers/customer.controller.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Diversitechnologies Customers' });
});

// Create a new Customer
router.post('/one', customers.create);

// Retrieve all Customer
router.get('/all', customers.findAll);

// Retrieve a single Customer by Id
router.get('/one/:customerId', customers.findById);

// Update a Customer with Id
router.put('/one/:customerId', customers.update);

// Delete a Customer with Id
router.delete('/one/:customerId', customers.delete);

module.exports = router;