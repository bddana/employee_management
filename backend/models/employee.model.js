module.exports = function(sequelize, Sequelize) {
 
    var employee = sequelize.define('user', {
 
        employeeId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
 
        Phone: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        address:{
            type: Sequelize.STRING
        },
     employeeTypeId:{
         type: sequelize.INTEGER
     },
    employeeStatusId:{
        type:sequelize.INTEGER
    }
 
    });
 
    return employee;
 
}