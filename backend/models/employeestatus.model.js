module.exports = function(sequelize, Sequelize) {
 
    var employeeStatus = sequelize.define('employeestatus', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        employeeStatus: {
            type: Sequelize.ENUM('Active', 'Inactive', 'Pending', 'Terminated', 'Resigned','Pending Termination', 'Temporary Inactive'),
            defaultValue: 'active'
        }},
        {
            freezeTableName: true,
            timestamps: false
        },
        {
            freezeTableName: true,
            timestamps: false
        }
 
    );
    employeeStatus.associate = function(){
        employeeStatus.belongsTo(employee)
        
    };
 
    return employeeStatus;
 
}