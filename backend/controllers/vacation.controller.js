const { where } = require('sequelize');
const { vacation } = require('../config/db.config.js');
//const { employees, sequelize, employeetype } = require('../config/db.config.js');
const db = require('../config/db.config.js');
//let models = require('../models');
//const models = require('../models/employeetype.model');

const Vacation = db.vacation;
const Employee = db.employees;
const Op = db.Sequelize.Op;


 
// FETCH all Customers
exports.findAll = (req, res) => {
	Vacation.findAll().then(vacation => {
		// Send all customers to Client
		res.send(vacation);
	});

};

exports.findAllNew = (req, res) => {
	Vacation.findAll({
		where: {vacationStatus: "New Request"},
		include : Employee
	}).then(vacation => {
		// Send all customers to Client
		res.send(vacation);
	});

};

exports.findAllforUser = async(req, res) => {
    const response = await Vacation.findAll({
        include : {
            model:Employee,
            where: {
                email: req.body.email
            },
        }
    }).map(el => el.get({ plain: true }))
    return res.status(200).send(response);
};

// create vacation
exports.create = async(req, res) => {
    var oneEmployee = await Employee.findOne({
        where: {email: req.body.email}
	});
	
	if(oneEmployee === null) {
        console.log("Employee not found")
	}
	
	const oneVacation = await Vacation.create({
        vacationType: req.body.reason,
        vacationStatus: req.body.status,
        vacationStartDate: req.body.start,
        vacationEndDate: req.body.end,
    });
	oneVacation.setEmployees(oneEmployee)
};

exports.update = async(req, res) => {
	console.log(req.body)
	const id = req.body.vacationId;

	const response = await Vacation.update({
        vacationType: req.body.vacationType,
        vacationStatus: req.body.vacationStatus,
        vacationStartDate: req.body.vacationStartDate,
        vacationEndDate: req.body.vacationEndDate,
    }, {
	where: { vacationId: id }
	});
   
	return res.status(200).send('deleted successfully a schedule with id = ' + id + response);
};
