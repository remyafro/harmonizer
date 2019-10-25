const Sequelize = require('sequelize');

module.exports =  new Sequelize('innodb', 'adminworkload', '8B7Lpu0Lh6eoM6g3gTPk', {
    host: 'workloadharmony.chxque89kvrk.ap-southeast-1.rds.amazonaws.com',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        freezeTableName: true,
        timestamps: false,
    }
});