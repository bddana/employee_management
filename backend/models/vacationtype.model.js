module.exports = function(sequelize, Sequelize) {
 
    var vacationtype= sequelize.define('vacationtype', {
 
        vacationTypeId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        vacationType: {
            type: Sequelize.ENUM('Travel', 'Sick', 'Appointment', 'Attending Event', 'Personal Issue', 'Emergency'),
        }
 
 
    });
 
    return vacationtype;
} 