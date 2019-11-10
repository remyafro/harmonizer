const User = require('../models/User');

module.exports = (sequelize,DataTypes) => {
    const UserWorkLoad = sequelize.define('UserWorkLoad', {
        userLoadID : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        teachingHour : {
            type: DataTypes.FLOAT,

        },
        researchHour : {
            type: DataTypes.FLOAT,

        },
        serviceHour : {
            type: DataTypes.FLOAT,

        },
        anythingHour : {
            type: DataTypes.FLOAT,

        },
        userID : {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: User,
                key: 'userID'

            }

        },
        workLoadYear : {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    });

    return UserWorkLoad
}