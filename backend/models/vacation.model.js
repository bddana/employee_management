module.exports = function(sequelize, Sequelize) {
 
    var vacation = sequelize.define('vacation', {
 
        vacationId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        employeeTypeId:{
            type: sequelize.INTEGER
        },
        vacationTypeId:{
            type: sequelize.INTEGER
        },
        vacationStatusId:{
            type: sequelize.INTEGER
        },
        vacationStartDate:{
            type: sequelize.DATE
        },
        vacationEndDate:{
            type: sequelize.DATE
        },

 
 
    });
 
    return vacation;
 
}