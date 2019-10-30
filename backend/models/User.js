const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

function hashPassword(user, options){
    const SALT_FACTOR = 8

    if (!user.changed('password')) {
        return;
    }

    return bcrypt
        .getSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password, salt,  null))
        .then(hash => {
            user.setDataValue('password',hash)
        })
}
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        UserID : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        userLogin : {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false

        },
        userPassword : {
            type: DataTypes.STRING,
            allowNull: false

        },
        userName : {
            type: DataTypes.STRING,
            allowNull: false

        },
        userContact : {
            type: DataTypes.STRING,
            allowNull: false

        },
        userEmail : {
            type: DataTypes.STRING,
            allowNull: false

        },
        disciplineID : {
            type: DataTypes.INTEGER,
            allowNull: false

        },
        accountType : {
            type: DataTypes.STRING,
            allowNull: false

        },

    }, {
            hooks : {
                beforeCreate: hashPassword,
                beforeUpdate: hashPassword,
                beforeSave: hashPassword,
            }
    })

    User.prototype.validPassword = function(password){
        return bcrypt.compareSync(password, this.password);
    };

    User.associate = function (models) {

    }

    return User
}