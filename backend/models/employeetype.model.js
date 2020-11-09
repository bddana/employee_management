module.exports = function(sequelize, Sequelize) {
 
    var employeeType = sequelize.define('employeeType', {
 
        employeeTypeId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        employeeType: {
            type: Sequelize.ENUM('Owner', 'Supervisor', 'Captain'),
        }
 
 
    });
 
    return employeeType;
 
}