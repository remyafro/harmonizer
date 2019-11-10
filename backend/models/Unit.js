const Discipline = require('./Discipline')

module.exports = (sequelize,DataTypes) => {
    const Unit = sequelize.define('Unit', {
        unitID : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        unitCode : {
            type: DataTypes.STRING,
            allowNull: false

        },
        unitName : {
            type: DataTypes.STRING,
            allowNull: false

        },
        unitTutorialSize : {
            type: DataTypes.STRING,
            allowNull: false

        },
        gradType : {
            type: DataTypes.STRING,
            allowNull: false

        },
        unitYear: {
          type: DataTypes.INTEGER,
            allowNull: false,
        },
        unitPeriod : {
            type: DataTypes.STRING,
            allowNull: false

        },
        unitLocation : {
            type: DataTypes.STRING,
            allowNull: false

        },
        unitTotalStudent : {
            type: DataTypes.STRING,
            allowNull: false

        },
        unitMode : {
            type: DataTypes.STRING,
            allowNull: false

        },
        disciplineID : {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: Discipline,
                key: 'disciplineID'

            }

        },

    });



    return Unit
}