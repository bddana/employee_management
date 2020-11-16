const boatrental = require("../config/db.config");
//const employeeType = require('./employeetype.model');
module.exports = function(sequelize, Sequelize) {
 
    var boatrental = sequelize.define('boatrental', {
 
        boatRentalId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        boatRentalStatusId: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },
 
        boatId: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },
 
        employeeId: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },

        customerId: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },
 
        bookingDate: {
            type: Sequelize.DATEONLY,
            notEmpty: true
        },
 
        bookingTime:{
            type: Sequelize.TIME
        },
        passengers:{
            type: Sequelize.INTEGER,
            
        },
        requestedCoolers:{
            type:Sequelize.INTEGER
        },
        specialNotes: {
            type: Sequelize.STRING,
            notEmpty: true
        },
    },
    
    {
        freezeTableName: true,
        timestamps: false
    });

    
    return boatrental;
 
}