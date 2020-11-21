//express = require('express');
import express from 'express';
const db = require('../config/db.config');
var employee = db.employees;

var modelsEmployee = require('../controllers/employee.controller');
var modelsBoat = require('../controllers/boatrental.controller');
//var modelsBoatManager = require('../controllers/boatrentalManager.controller');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title: 'Diversitechnologies'});
});
router.get("/employee", modelsEmployee.findAll);
router.post("/employees", modelsEmployee.create);
router.delete("/employee/:employeeId", modelsEmployee.delete);
router.put("/employee/:employeeId", modelsEmployee.update);
router.get("/employee/:employeeId", modelsEmployee.findOne);


router.get("/boat", modelsBoat.findAll);
router.put("/boat/:boatStatusReportId", modelsBoat.update);
router.get("/boat/:boatStatusReportId", modelsBoat.findOne);

router.get("/boatmanager", modelsBoat.findAll);
router.post("/boatmanager", modelsBoat.create);
router.delete("/boatmanager/:boatStatusReportId", modelsBoat.delete);
router.put("/boatmanager/:boatStatusReportId", modelsBoat.update);
router.get("/boatmanager/:boatStatusReportId", modelsBoat.findOne);

module.exports = router;