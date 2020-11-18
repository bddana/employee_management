module.exports = function(sequelize, Sequelize) {
 
    var boatstatusreport = sequelize.define('boatstatusreport', {
 
        boatStatusReportId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        firstName:{
            type: Sequelize.STRING(45)
        },
        lastName:{
            type: Sequelize.STRING(45)
        },

        scheduleDate: {
            type: Sequelize.DATEONLY
        },

        shift: {
            type: Sequelize.DATEONLY
        },
        boatStatus:{
            type: Sequelize.STRING(45)
        },
        name:{
            type: Sequelize.STRING(45)
        },
        description:{
            type: Sequelize.STRING(45)
        },
        // employeeId: {
        //     type: Sequelize.INTEGER,
        //     allowNull: false,
        //     references: {         // WorkingDays hasMany Users n:n
        //       model: 'employee',
        //       key: 'id'
        //     }
        // }
 
    },   {
        indexes:[
            {
                unique:false,
                fields:["vacationReportId"]
            },
            // {
            //     unique:false,
            //     fields:["vacationTypeId"]
            // },
            // {
            //     unique:false,
            //     fields:["vacationStatusId"]
            // }
        ]
    });
 
    return boatstatusreport;
 
}