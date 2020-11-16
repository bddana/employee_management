const { employees, employeetype } = require("../config/db.config");
//const employeeType = require('./employeetype.model');
module.exports = function(sequelize, Sequelize) {
 
    var employee = sequelize.define('employees', {
 
        employeeId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        firstName: {
            type: Sequelize.STRING(45),
            notEmpty: true
        },
 
        lastName: {
            type: Sequelize.STRING(45),
            notEmpty: true
        },
 
        email: {
            type: Sequelize.STRING(45),
            validate: {
                isEmail: true
            }
        },
 
        Phone: {
            type: Sequelize.STRING(10),
            notEmpty: true
        },
 
        address:{
            type: Sequelize.STRING(45)
        },
        employeeStatus:{
            type: Sequelize.STRING(45)
        },
        employeeType:{
            type: Sequelize.STRING(45)
        },
        // employeeTypeId:{
        //     type: Sequelize.INTEGER,
            
        // },
        // employeeStatusId:{
        //     type:Sequelize.INTEGER
        // }
    },
    
    {
        freezeTableName: true,
        timestamps: false
    });

    // var employeeType = sequelize.define('employeeType', {
 
    //     employeeTypeId: {
    //         autoIncrement: true,
    //         primaryKey: true,
    //         type: Sequelize.INTEGER,
            
    //     },

    //     employeeType: {
    //         type: Sequelize.ENUM('Owner', 'Supervisor', 'Captain'),
    //     }},
    //     {
    //         freezeTableName: true,
    //         timestamps: false
 
 
    // });
    // employee.associate = function(){
    //     employee.hasOne(employeeType,{foreignKey:'employeeTypeId'});
        
    // };
    // employeeType.associate = function(){
    //     employeeType.hasOne(employee,{foreignKey:'employeeTypeId'});
    // };
    //employees.associate = function(){
        //models.employeetype.hasMany(employee,{foreginKey:'employeeTypeId',sourceKey:'employeeTypeId'})
    //employees.hasOne(employeetype,{foreignKey:'employeeTypeId'});
        //,{Foreignkey:{name:'employeeTypeId'}}
    //};
    return employee;
 
}