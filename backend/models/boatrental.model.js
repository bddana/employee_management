const boatrental = require("../config/db.config");
//const employeeType = require('./employeetype.model');
module.exports = function(sequelize, Sequelize) {
 
    var boatrental = sequelize.define('boatstatusreport', {
 
        boatStatusReportId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        firstName: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        lastName: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        scheduleDate: {
            type: Sequelize.DATEONLY,
            notEmpty: true
        },

        shift:{
            type: Sequelize.TIME
        },

        boatStatus: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        boatId: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },
 
        
        name:{
            type: Sequelize.STRING,
            
        },
        description:{
            type:Sequelize.STRING
        },
        
    },
    
    {
        freezeTableName: true,
        timestamps: false
    });

    
    return boatrental;
 
}