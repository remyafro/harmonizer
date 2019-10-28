const Sequelize = require('sequelize');
const db  = require('../config/index');
const Discipline = require('../models/Discipline');


const Unit = db.define('Unit', {
    unitID : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    unitCode : {
        type: Sequelize.STRING,
        allowNull: false

    },
    unitName : {
        type: Sequelize.STRING,
        allowNull: false

    },
    unitTutorialSize : {
        type: Sequelize.STRING,
        allowNull: false

    },
    gradType : {
        type: Sequelize.STRING,
        allowNull: false

    },
    unitPeriod : {
        type: Sequelize.STRING,
        allowNull: false

    },
    unitLocation : {
        type: Sequelize.STRING,
        allowNull: false

    },
    unitTotalStudent : {
        type: Sequelize.STRING,
        allowNull: false

    },
    unitMode : {
        type: Sequelize.STRING,
        allowNull: false

    },
    disciplineID : {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
            model: Discipline,
            key: 'disciplineID'

        }

    },

});

module.exports = Unit;