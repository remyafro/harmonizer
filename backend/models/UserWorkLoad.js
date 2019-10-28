const Sequelize = require('sequelize');
const db  = require('../config/index');
const bcrypt = require('bcryptjs');
const User = require('../models/User');


const UserWorkLoad = db.define('UserWorkLoad', {
    UserLoadID : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    teachingHour : {
        type: Sequelize.FLOAT,
        allowNull: false

    },
    researchHour : {
        type: Sequelize.FLOAT,
        allowNull: false

    },
    serviceHour : {
        type: Sequelize.FLOAT,
        allowNull: false

    },
    anythingHour : {
        type: Sequelize.FLOAT,
        allowNull: false

    },
    userID : {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
            model: User,
            key: 'userID'

        }

    },

});

module.exports = UserWorkLoad;