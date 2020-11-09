module.exports = function(sequelize, Sequelize) {
 
    var useraccount= sequelize.define('useraccount', {
 
        userAccountId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        employeeID: {
            type: Sequelize.INTEGER,
        },
 
        username: {
            type: Sequelize.TEXT
        },
 
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
 
 
    });
 
    return useraccount;
 
}