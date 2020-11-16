const { employees, employeetype } = require("../config/db.config");
//const employeeType = require('./employeetype.model');
module.exports = function(sequelize, Sequelize) {
 
    var employee = sequelize.define('employee', {
 
        employeeId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
 
        Phone: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        address:{
            type: Sequelize.STRING
        },
        employeeTypeId:{
            type: Sequelize.INTEGER,
            
        },
        employeeStatusId:{
            type:Sequelize.INTEGER
        }
    },
    
    {
        freezeTableName: true,
        timestamps: false
    });

    var employeeType = sequelize.define('employeeType', {
 
        employeeTypeId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
            
        },

        employeeType: {
            type: Sequelize.ENUM('Owner', 'Supervisor', 'Captain'),
        }},
        {
            freezeTableName: true,
            timestamps: false
 
 
    });
    employee.associate = function(){
        employee.hasOne(employeeType,{foreignKey:'employeeTypeId'});
        
    };
    employeeType.associate = function(){
        employeeType.hasOne(employee,{foreignKey:'employeeTypeId'});
    };
    //employees.associate = function(){
        //models.employeetype.hasMany(employee,{foreginKey:'employeeTypeId',sourceKey:'employeeTypeId'})
    //employees.hasOne(employeetype,{foreignKey:'employeeTypeId'});
        //,{Foreignkey:{name:'employeeTypeId'}}
    //};
    return employee;
 
}