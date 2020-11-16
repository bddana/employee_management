module.exports = function(sequelize, Sequelize) {
 
    var employee = sequelize.define('employee', {
 
        employeeId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        firstName: {
            type: Sequelize.STRING(45),
            notEmpty: true
        },
 
        lastName: {
            type: Sequelize.STRING(45),
            notEmpty: true
        },
 
        email: {
            type: Sequelize.STRING(45),
            validate: {
                isEmail: true
            }
        },
 
        Phone: {
            type: Sequelize.STRING(10),
            notEmpty: true
        },
 
        address:{
            type: Sequelize.STRING(45)
        },
        employeeStatus:{
            type: Sequelize.STRING(45)
        },
        employeeType:{
            type: Sequelize.STRING(45)
        },
    }
    );
 
    return employee;
 
}