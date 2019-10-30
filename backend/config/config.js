const path = require('path');

module.exports = {
    port: process.env.PORT || 5000,
    db: {
        database: 'test',
        user: 'root',
        password: 'password',
        options: {
            dialect: 'mysql',
            host: '127.0.0.1',
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