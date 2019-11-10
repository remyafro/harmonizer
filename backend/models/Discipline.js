module.exports = (sequelize,DataTypes) => {
    const Discipline = sequelize.define('Discipline', {
        disciplineID : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        disciplineName : {
            type: DataTypes.STRING,
            allowNull: false

        },
        assignmentRate : {
            type: DataTypes.FLOAT,
            allowNull: false

        },
        examRate : {
            type: DataTypes.FLOAT,
            allowNull: false

        },
    });


    return Discipline
}