module.exports = function(sequelize, Sequelize) {
 
    var vacation = sequelize.define('vacation', {
 
        vacationId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        vacationType:{
            type: Sequelize.STRING(45)
        },
        vacationStatus:{
            type: Sequelize.STRING(45)
        },
        vacationStartDate:{
            type: Sequelize.DATEONLY
        },
        vacationEndDate:{
            type: Sequelize.DATEONLY
        },
    });
 
    return vacation;
 
}