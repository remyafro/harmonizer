const {Unit} = require('../models');
const {Discipline} = require('../models');
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
            const units =  await sequelize.query('SELECT * FROM Unit,DISCIPLINE WHERE UNIT.DISCIPLINEID=DISCIPLINE.DISCIPLINEID;', {
                type: Sequelize.QueryTypes.SELECT
            });
            res.send(units)
        } catch(err){
            res.status(400).send({
                error: err
            })
        }
    },
    async post(req,res){
        try{
            console.log(req.body)
            const unit = await Unit.create(req.body)
            res.send(unit)

        } catch(err){
            res.status(400).send({
                error: 'Error while trying to create User'
            })
        }
    },
    async show(req,res){
        try{
            const unit =  await Unit.findByPk(req.params.unitid)
            res.send(unit)
        } catch(err){
            res.status(400).send({
                error: 'Error while fetching User'
            })
        }
    },
    async put(req,res){
        try{
            await Unit.update(req.body, {
                where: {
                    unitID: req.params.unitid
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
            await Unit.destroy({
                where: {
                    unitID: req.params.unitid
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