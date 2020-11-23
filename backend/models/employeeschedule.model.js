module.exports = function(sequelize, Sequelize) {
 
    var employee = sequelize.define('employeeschedule', { 
        unableToCome: {
            type: Sequelize.DataTypes.BOOLEAN,
        },
        unableToCome_reason: {
            type: Sequelize.STRING(45),
        }
    } );
 
    return employee;
 
}