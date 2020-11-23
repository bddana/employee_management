module.exports = function(sequelize, Sequelize) {
 
    var schedule = sequelize.define('schedule', {
 
        scheduleId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        name: {
            type: Sequelize.STRING(45),
        },

        start: {
            type: Sequelize.STRING(45),
        },
        end: {
            type: Sequelize.STRING(45),
        },
        duration: {
            type: Sequelize.STRING(45),
        },
        color: {
            type: Sequelize.STRING(45),
        }
    });
 
    return schedule;
 
}