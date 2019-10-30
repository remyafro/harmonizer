module.exports = (sequelize,DataTypes) => {
    const UserWorkLoad = sequelize.define('UserWorkLoad', {
        UserLoadID : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        teachingHour : {
            type: DataTypes.FLOAT,
            allowNull: false

        },
        researchHour : {
            type: DataTypes.FLOAT,
            allowNull: false

        },
        serviceHour : {
            type: DataTypes.FLOAT,
            allowNull: false

        },
        anythingHour : {
            type: DataTypes.FLOAT,
            allowNull: false

        },
        userID : {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: User,
                key: 'userID'

            }

        },

    });

    return UserWorkLoad
}