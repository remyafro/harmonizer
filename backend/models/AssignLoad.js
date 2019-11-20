const User = require('./User');
const Unit = require('./Unit');

module.exports = (sequelize,DataTypes) => {
    const AssignLoad = sequelize.define('AssignLoad', {
        assignLoadID : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        assignmentHour : {
            type: DataTypes.FLOAT,
            allowNull: false

        },
        examHour : {
            type: DataTypes.FLOAT,
            allowNull: false

        },
        tutorialHour : {
            type: DataTypes.FLOAT,
            allowNull: false

        },
        supAssHour : {
            type: DataTypes.FLOAT,
            allowNull: false

        },
        assignmentCasualHour : {
            type: DataTypes.FLOAT,
            allowNull: false

        },
        examCasualHour : {
            type: DataTypes.FLOAT,
            allowNull: false

        },
        tutorialCasualHour : {
            type: DataTypes.FLOAT,
            allowNull: false

        },
        supAssCasualHour : {
            type: DataTypes.FLOAT,
            allowNull: false

        },
        userID : {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: 'User',
                key: 'userID'

            }

        },
        unitID : {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: 'Unit',
                key: 'unitID'

            }

        },

    });

    return AssignLoad;
}