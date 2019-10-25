const Sequelize = require('sequelize');
const db  = require('../config/index');
const bcrypt = require('bcryptjs');


const Account = db.define('Account', {
    accountID : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    accountLogin : {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false

    },
    accountPassword : {
        type: Sequelize.STRING,
        allowNull: false

    },
    accountType : {
        type: Sequelize.STRING,
        allowNull: false

    },

});

Account.beforeCreate = function(account){
    const salt = bcrypt.genSaltSync();
    account.accountPassword = bcrypt.hashSync(account.accountPassword, salt);
};

module.exports = Account;