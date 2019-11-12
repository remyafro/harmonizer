const {Unit} = require('../models');
const {User} = require('../models');
const {AssignLoad} = require('../models');
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
            const units =  await sequelize.query('SELECT * FROM ASSIGNLOAD INNER JOIN UNIT ON UNIT.UNITID=ASSIGNLOAD.UNITID JOIN USER ON ASSIGNLOAD.USERID = USER.USERID INNER JOIN DISCIPLINE ON UNIT.DISCIPLINEID = DISCIPLINE.DISCIPLINEID ;', {
                type: Sequelize.QueryTypes.SELECT
            });
            res.send(units)
        } catch(err){
            res.status(400).send({
                error: err
            })
        }
    },
    async sumofcas(req,res){
        try{
            const total =  await sequelize.query('SELECT SUM(IFNULL(`examcasualhour`, 0) + IFNULL(`tutorialcasualhour`, 0) + IFNULL(`supasscasualhour`, 0) + IFNULL(`assignmentcasualhour`, 0)) AS TOTAL FROM ASSIGNLOAD;', {
                type: Sequelize.QueryTypes.SELECT
            });
            res.send(total)
        } catch(err){
            res.status(400).send({
                error: err
            })
        }
    },
    async post(req,res){
        try{
            console.log(req.body)
            const load = await AssignLoad.create(req.body)
            res.send(load)

        } catch(err){
            res.status(400).send({
                error: err
            })
        }
    },
    async getUserFromDiscipline(req,res){
        try{
            const users =  await User.findAll({
                where : {
                    disciplineID: req.params.disciplineid
                }
            })
            res.send(users)
        } catch(err){
            res.status(400).send({
                error: 'Error while fetching Users from discipline'
            })
        }
    },
    async getUnitFromDiscipline(req,res){
        try{
            const units =  await Unit.findAll({
                where : {
                    disciplineID: req.params.disciplineid
                }
            })
            res.send(units)
        } catch(err){
            res.status(400).send({
                error: 'Error while fetching Units from discipline'
            })
        }
    },
    async show(req,res){
        try{
            const assignload =  await AssignLoad.findByPk(req.params.assignloadid)
            res.send(assignload)
        } catch(err){
            res.status(400).send({
                error: 'Error while fetching assignload'
            })
        }
    },
    async getUnit(req,res){
        try{
            const units =  await sequelize.query('SELECT * FROM Unit INNER JOIN DISCIPLINE ON UNIT.DISCIPLINEID=DISCIPLINE.DISCIPLINEID WHERE UNIT.UNITID = ' + req.params.unitid, {
                type: Sequelize.QueryTypes.SELECT
            });
            res.send(units)
        } catch(err){
            res.status(400).send({
                error: err
            })
        }
    },
    async teach(req,res){
        try{
            console.log(req.body)
            const answer =  await sequelize.query('UPDATE USERWORKLOAD SET TEACHINGHOUR = TEACHINGHOUR + ' + req.body.teachinghour + ' WHERE userID =' + req.body.userid, {
                type: Sequelize.QueryTypes.UPDATE
            });
            res.send(answer)
        } catch(err){
            res.status(400).send({
                error: err
            })
        }
    },
    async updateTeach(req,res){
        try{
            console.log(req.body)
            const answer =  await sequelize.query('UPDATE USERWORKLOAD SET TEACHINGHOUR = (TEACHINGHOUR - ' + req.body.oldhour + ') + ' + req.body.teachinghour + ' WHERE userID =' + req.body.userid, {
                type: Sequelize.QueryTypes.UPDATE
            });
            res.send(answer)
        } catch(err){
            res.status(400).send({
                error: err
            })
        }
    },
    async minusTeach(req,res){
        try{
            console.log(req.body)
            const answer =  await sequelize.query('UPDATE USERWORKLOAD SET TEACHINGHOUR = TEACHINGHOUR - ' + req.body.oldhour + ' WHERE userID =' + req.body.userid, {
                type: Sequelize.QueryTypes.UPDATE
            });
            res.send(answer)
        } catch(err){
            res.status(400).send({
                error: err
            })
        }
    },
    async put(req,res){
        try{
            await AssignLoad.update(req.body, {
                where: {
                    assignLoadID: req.params.assignloadid
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
            await AssignLoad.destroy({
                where: {
                    assignLoadID: req.params.assignloadid
                }
            })
            res.send(req.body)
        } catch(err){
            res.status(400).send({
                error: 'Error while deleting'
            })
        }
    },

}