const Sequelize = require('sequelize');
const db  = require('../config/index');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Unit = require('../models/Unit');


const AssignLoad = db.define('AssignLoad', {
    assignLoadID : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    assignmentHour : {
        type: Sequelize.FLOAT,
        allowNull: false

    },
    examHour : {
        type: Sequelize.FLOAT,
        allowNull: false

    },
    tutorialHour : {
        type: Sequelize.FLOAT,
        allowNull: false

    },
    supAssHour : {
        type: Sequelize.FLOAT,
        allowNull: false

    },
    assignmentCasualHour : {
        type: Sequelize.FLOAT,
        allowNull: false

    },
    examCasualHour : {
        type: Sequelize.FLOAT,
        allowNull: false

    },
    tutorialCasualHour : {
        type: Sequelize.FLOAT,
        allowNull: false

    },
    supAssCasualHour : {
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
    unitID : {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
            model: Unit,
            key: 'unitID'

        }

    },

});

module.exports = Unit;