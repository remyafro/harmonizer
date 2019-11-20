const {User} = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

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
            //console.log(user.validPassword(password));
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
                    usertype : 'admin',
                    disciplineid : user.disciplineID
                })
            }
            else if(user.accountType == 'staff-FT'){
                res.send({
                    user: userJson,
                    token: jwtSignUser(userJson),
                    usertype : 'staff-FT',
                    disciplineid : user.disciplineID
                })
            }
            else if(user.accountType == 'staff-PT'){
                res.send({
                    user: userJson,
                    token: jwtSignUser(userJson),
                    usertype : 'staff-PT',
                    disciplineid : user.disciplineID
                })
            }
            else if(user.accountType == 'hod'){
                res.send({
                    user: userJson,
                    token: jwtSignUser(userJson),
                    usertype : 'hod',
                    disciplineid : user.disciplineID
                })
            }

        } catch(err){
            res.status(400).send({
                error: err
            })
        }
    }

}