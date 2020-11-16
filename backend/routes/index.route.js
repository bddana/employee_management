//express = require('express');
import express from 'express';


var modelsEmployee = require('../controllers/employee.controller');
var modelsBoat = require('../controllers/boatrental.controller');


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title: 'Diversitechnologies'});
});
router.get("/employee", modelsEmployee.findAll);
router.get("/boat", modelsBoat.findAll);
router.post("/employee", modelsEmployee.create);



module.exports = router;