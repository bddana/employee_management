module.exports = function(sequelize, Sequelize) {
 
    var schedule = sequelize.define('schedule', {
 
        schedykeId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        employeeTypeId:{
            type: sequelize.INTEGER
        },

        shift:{
                type: sequelize.INTEGER
            },  
        

        scheduleDate: {
                type: Sequelize.DATE
            },
     
 
 
    });
 
    return schedule;
 
}