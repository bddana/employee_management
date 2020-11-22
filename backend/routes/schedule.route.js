var express = require('express');
const schedule = require('../controllers/schedule.controller.js');


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Diversitechnologies schedule' });
});

// Create a new Customer
router.post('/one', schedule.create)
router.post('/updateone', schedule.update)
router.post('/del', schedule.delete)

// Retrieve all Customer
router.get('/all', schedule.findAll);
router.post('/alluser', schedule.findAllUser);

router.post('/cantwork', schedule.cantwork);
module.exports = router;