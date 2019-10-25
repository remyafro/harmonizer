const Sequelize = require('sequelize');
const db  = require('../config/index');
const bcrypt = require('bcryptjs');
const Account = require('../models/Account');


const Admin = db.define('Admin', {
    adminID : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    adminName : {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false

    },
    adminContact : {
        type: Sequelize.STRING,
        allowNull: false

    },
    adminEmail : {
        type: Sequelize.STRING,
        allowNull: false

    },
    accountID : {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
            model: Account,
            key: 'accountID'
        }
    }

});

module.exports = Admin;