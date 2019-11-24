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
            const result =  await sequelize.query('SELECT * FROM USER INNER JOIN USERWORKLOAD ON USER.USERID = USERWORKLOAD.USERID ',{
                type: Sequelize.QueryTypes.SELECT
            })
            res.send(result)
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
            const result =  await sequelize.query('INSERT INTO UserWorkLoad(USERLOADID,TEACHINGHOUR,RESEARCHHOUR,SERVICEHOUR,ANYTHINGHOUR,USERID,WORKLOADYEAR) VALUES (' + id + ',0,0,0,0,'+ req.body.userID +',2019)',{
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
            const user =  await sequelize.query('SELECT * FROM User INNER JOIN UserWorkLoad ON User.UserID = UserWorkLoad.USERID WHERE USER.USERID ='+ req.params.userid,{
                type: Sequelize.QueryTypes.SELECT
            })
            res.send(user)
        } catch(err){
            res.status(400).send({
                error: 'Error while fetching User'
            })
        }
    },
    async delete(req,res){
        console.log('wrong!')
        try{
            await UserWorkLoad.destroy({
                where: {
                    userLoadID: req.params.userloadid
                }
            })
            res.send(req.body)
        } catch(err){
            res.status(400).send({
                error: 'Error while deleting'
            })
        }
    },
    async deleteUser(req,res){
        console.log('calling the right function')
        try{
            await UserWorkLoad.destroy({
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
    async edit(req,res){
        try{
            const user =  await UserWorkLoad.findByPk(req.params.userid)
            res.send(user)
        } catch(err){
            res.status(400).send({
                error: 'Error while fetching User'
            })
        }
    },
    async put(req,res){
        try{
            await UserWorkLoad.update(req.body, {
                where: {
                    userLoadID: req.params.userloadid
                }
            })
            res.send(req.body)
        } catch(err){
            res.status(400).send({
                error: err
            })
        }
    },
    async getpie(req,res){
        try{
            const user =  await UserWorkLoad.findOne({
                where: {
                    userid: req.params.userid
                }
            })
            res.send(user)
        } catch(err){
            res.status(400).send({
                error: 'Error while fetching User'
            })
        }
    },

}