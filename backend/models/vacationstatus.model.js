module.exports = function(sequelize, Sequelize) {
 
    var vacationstatus = sequelize.define('vacationstatus', {
 
        vacationStatusId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        vacationStatus: {
            type: Sequelize.ENUM('New Request', 'Pending', 'Approved', 'Declined', 'Canceled', 'Closed'),
        }
 
 
    });
 
    return vacationstatus;
}