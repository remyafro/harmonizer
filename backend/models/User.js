const Sequelize = require('sequelize');
const db  = require('../config/index');
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




const User = db.define('User', {
    UserID : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    userLogin : {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false

    },
    userPassword : {
        type: Sequelize.STRING,
        allowNull: false

    },
    userName : {
        type: Sequelize.STRING,
        allowNull: false

    },
    userContact : {
        type: Sequelize.STRING,
        allowNull: false

    },
    userEmail : {
        type: Sequelize.STRING,
        allowNull: false

    },
    disciplineID : {
        type: Sequelize.INTEGER,
        allowNull: false

    },
    accountType : {
        type: Sequelize.STRING,
        allowNull: false

    },
});

User.prototype.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};


User.beforeCreate(hashPassword);

//
// User.beforeCreate = function(user){
//     const salt = bcrypt.genSaltSync();
//     user.userPassword = bcrypt.hashSync(user.userPassword, salt);
// };

module.exports = User;