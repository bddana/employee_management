const db = require('../config/db.config.js');
const Schedule = db.schedule;
const Employee = db.employees;
const Op = db.Sequelize.Op;

// Post a schedule
exports.create = async(req, res) => {
    var oneEmployee = await Employee.findAll({
        where: {
            [Op.or]: req.body.employee
        }
    });

    if(oneEmployee === null) {
        console.log("Employee not found")
    }
    const oneSchedule = await Schedule.create({
        name: req.body.name,
        start: req.body.start,
        end: req.body.end,
        color: req.body.color,
        duration: req.body.duration,
    });

    oneSchedule.setEmployees(oneEmployee)
};

// fetch all manager schedule
exports.findAll = async(req, res) => {
     const response = await Schedule.findAll({
         include : Employee
     }).map(el => el.get({ plain: true }))
    return res.status(200).send(response);
};

// FETCH all user schedule
exports.findAllUser = async(req, res) => {
    const response = await Schedule.findAll({
        include : {
            model:Employee,
            where: {
                email: req.body.email
            },
        }
    }).map(el => el.get({ plain: true }))
    return res.status(200).send(response);
};

exports.delete = async(req, res) => {
    const id = req.body.scheduleId;
    
	const response = await Schedule.destroy({
	  where: { scheduleId: id }
	});
   
    return res.status(200).send('deleted successfully a schedule with id = ' + id + response);
};

// Update a Customer
exports.update = async(req, res) => {
    const id = req.body.scheduleId;
    var oneEmployee = await Employee.findAll({
        where: {
            [Op.or]: req.body.employee
        }
    });
    const response = await Schedule.destroy({
        where: { scheduleId: id }
    });

	const oneSchedule = await Schedule.create({ 
        name: req.body.name,
        start: req.body.start,
        end: req.body.end,
        color: req.body.color,
        duration: req.body.duration,
    });

    oneSchedule.setEmployees(oneEmployee)
    return  res.status(200).send("updated successfully a schedule with id = " + id);
};

exports.cantwork = async(req, res) => {
    const id = req.body.scheduleId;
    console.log(req.body)
	const response = await Schedule.update({
        name: req.body.name,
        start: req.body.start,
        end: req.body.end,
        color: req.body.color,
        duration: req.body.duration,
        unableToCome:req.body.unableToCome,
        unableToCome_reason:req.body.unableToCome_reason,
    }, {
	    where: { scheduleId: id }
	});
   
    return res.status(200).send('deleted successfully a schedule with id = ' + id + response);
};

