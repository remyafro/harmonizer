const path = require('path');

module.exports = {
    port: process.env.PORT || 5000,
    db: {
        database: 'harmonizer',
        user: 'masteradmin',
        password: 'E0oA9K71Ng5C',
        options: {
            dialect: 'mysql',
            host: 'database-2.cxdfqruwderk.ap-southeast-1.rds.amazonaws.com',
            freezeTableName: true,
            timestamps: false,
            define: {
                freezeTableName: true,
                timestamps: false,
            }
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    },
    authentication: {
        jwtSecret : 'secret'
    }
}