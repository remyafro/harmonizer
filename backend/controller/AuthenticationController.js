const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/jwtconfig');

function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user,config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async login(req,res){
        try{
            const username = req.body.username;
            const password = req.body.password;

            const user = await User.findOne({
                where: {
                    userLogin: username,
                }
            })
            if(!user) {
                return res.status(403).send({
                    error: 'The login info is incorrect'
                })
            }

            const isPasswordValid = password === user.userPassword
            console.log(password);
            // console.log(user.validPassword(password));
            if(!isPasswordValid) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }
            const userJson = user.toJSON();

            if(user.accountType == 'admin'){
                res.send({
                    user: userJson,
                    token: jwtSignUser(userJson),
                    usertype : 'admin'
                })
            }
            else if(user.accountType == 'staff'){
                res.send({
                    user: userJson,
                    token: jwtSignUser(userJson),
                    usertype : 'staff'
                })
            }
            else if(user.accountType == 'hod'){
                res.send({
                    user: userJson,
                    token: jwtSignUser(userJson),
                    usertype : 'hod'
                })
            }

        } catch(err){
            res.status(400).send({
                error: 'Broke here'
            })
        }
    }

}