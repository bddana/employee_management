module.exports = function(sequelize, Sequelize) {
 
    var employeeStatus = sequelize.define('employeestatus', {
 
        employeeStatusId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        employeeStatus: {
            type: Sequelize.STRING(45),
        }
 
    });
 
    return employeeStatus;
 
}