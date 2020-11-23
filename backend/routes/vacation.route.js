var express = require('express');
const vacation = require('../controllers/vacation.controller.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Diversitechnologies Vacation' });
});


router.get('/all', vacation.findAll);
router.get('/allnew', vacation.findAllNew);
router.post('/add', vacation.create);
router.post('/update', vacation.update);
router.post('/one', vacation.findAllforUser);


module.exports = router;