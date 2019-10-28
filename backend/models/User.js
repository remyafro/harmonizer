const Sequelize = require('sequelize');
const db  = require('../config/index');
const bcrypt = require('bcryptjs');


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
//
// User.beforeCreate = function(user){
//     const salt = bcrypt.genSaltSync();
//     user.userPassword = bcrypt.hashSync(user.userPassword, salt);
// };

module.exports = User;