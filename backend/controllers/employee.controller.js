//const { employees } = require('../config/db.config.js');
const { where } = require('sequelize');
//const { employees, sequelize, employeetype } = require('../config/db.config.js');
const db = require('../config/db.config.js');
//let models = require('../models');
//const models = require('../models/employeetype.model');

const Employee = db.employees;
const Employeetype = db.employeetype;
const Op = db.Sequelize.Op;

//Post a Customer
exports.create = (req, res) => {	
	// Save to MySQL database
	Employee.create({ 
	  employeeId: req.body.employeeId,
	  firstname: req.body.firstname,
	  lastname:  req.body.lastname,
	  email:  req.body.email,
	  phone:  req.body.Phone,
	  address: req.body.address,
	  employeeStatus:  req.body.employeeStatus,
	  employeeType:  req.body.employeeType,
	}).then(employee => {		
		// Send created customer to client
		res.send(employee);
	});
};
 
// FETCH all Customers
exports.findAll = (req, res) => {
	Employee.findAll().then(employees => {
		
		// Send all customers to Client
		res.send(employees);
	});

};

// // Find a Customer by Id
// exports.findOne = (req, res) => {
// 	const id = req.params.id;
  
// 	Employee.findByPk(id)
// 	  .then(data => {
// 		res.send(data);
// 	  })
// 	  .catch(err => {
// 		res.status(500).send({
// 		  message: "Error retrieving Tutorial with id=" + id
// 		});
// 	  });
//   };
 
// // Update a Customer
// exports.update = (req, res) => {
// 	const id = req.params.customerId;
// 	Customer.update( { firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age }, 
// 					 { where: {id: req.params.customerId} }
// 				   ).then(() => {
// 					 res.status(200).send("updated successfully a customer with id = " + id);
// 				   });
// };
 
// // Delete a Customer by Id
// exports.delete = (req, res) => {
// 	const id = req.params.customerId;
// 	Customer.destroy({
// 	  where: { id: id }
// 	}).then(() => {
// 	  res.status(200).send('deleted successfully a customer with id = ' + id);
// 	});
// };