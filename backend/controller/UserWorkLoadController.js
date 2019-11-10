const {User} = require('../models');
const {UserWorkLoad} = require('../models');
const Op = require('sequelize').Op;
const Sequelize = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options,
    config.db.pool,
    config.db.define,
)

module.exports = {
    async index(req,res){
        try{
            const users =  await User.findAll({})
            res.send(users)
        } catch(err){
            res.status(400).send({
                error: 'Error while fetching Users'
            })
        }
    },
    async post(req,res){
        try{
            var id = Math.floor(Math.random() * 10001) + 1;
            console.log(req.body.userID)
            const result =  await sequelize.query('INSERT INTO USERWORKLOAD(USERLOADID,TEACHINGHOUR,RESEARCHHOUR,SERVICEHOUR,ANYTHINGHOUR,USERID,WORKLOADYEAR) VALUES (' + id + ',0,0,0,0,'+ req.body.userID +',2019)',{
                type: Sequelize.QueryTypes.INSERT
            })
            res.send(result)

        } catch(err){
            res.status(400).send({
                error: err
            })
        }
    },
    async show(req,res){
        try{
            const user =  await sequelize.query('SELECT * FROM USER INNER JOIN USERWORKLOAD ON USER.USERID = USERWORKLOAD.USERID WHERE USER.USERID ='+ req.params.userid,{
                type: Sequelize.QueryTypes.SELECT
            })
            res.send(user)
        } catch(err){
            res.status(400).send({
                error: 'Error while fetching User'
            })
        }
    },
    async teach(req,res){
        try{
            console.log(req.body)
            await User.update(req.body, {
                where: {
                    userID: req.params.userid
                }
            })
            res.send(req.body)
        } catch(err){
            res.status(400).send({
                error: err
            })
        }
    },
    async delete(req,res){
        try{
            await User.destroy({
                where: {
                    userID: req.params.userid
                }
            })
            res.send(req.body)
        } catch(err){
            res.status(400).send({
                error: 'Error while deleting'
            })
        }
    },
    async staff(req,res){
        try{
            const users =  await User.findAll({
                where: {
                    accountType: {
                        [Op.or]: ['staff-FT','staff-PT']
                    }
                }
            })
            res.send(users)
        } catch(err){
            res.status(400).send({
                error: 'error while fetching staff'
            })
        }
    },

}