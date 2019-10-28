const Sequelize = require('sequelize');
const db  = require('../config/index');
const bcrypt = require('bcryptjs');


const Discipline = db.define('Discipline', {
    disciplineID : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    DisciplineName : {
        type: Sequelize.STRING,
        allowNull: false

    },
    assignmentRate : {
        type: Sequelize.FLOAT,
        allowNull: false

    },
    examRate : {
        type: Sequelize.FLOAT,
        allowNull: false

    },
});

module.exports = Discipline;