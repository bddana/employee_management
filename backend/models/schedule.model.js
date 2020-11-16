module.exports = function(sequelize, Sequelize) {
 
    var schedule = sequelize.define('schedule', {
 
        scheduleId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        scheduleDate: {
                type: Sequelize.DATEONLY
            },

        shift: {
            type: Sequelize.DATEONLY
        },
    });
 
    return schedule;
 
}