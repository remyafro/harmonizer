const {Discipline} = require('../models');

module.exports = {
    async index(req,res){
        try{
            const disciplines =  await Discipline.findAll({})
            res.send(disciplines)
        } catch(err){
            res.status(400).send({
                error: 'Error while fetching disciplines'
            })
        }
    },
    async show(req,res){
        try{
            const user =  await Discipline.findByPk(req.params.disciplineid)
            res.send(user)
        } catch(err){
            res.status(400).send({
                error: 'Error while fetching Discipline'
            })
        }
    },
    async post(req,res){
        try{
            console.log(req.body)
            const discipline = await Discipline.create(req.body)
            res.send(discipline)

        } catch(err){
            res.status(400).send({
                error: err
            })
        }
    },
    async put(req,res){
        try{
            console.log(req.params)
            await Discipline.update(req.body, {
                where: {
                    disciplineID: req.params.disciplineid
                }
            })
            res.send(req.body)
        } catch(err){
            res.status(400).send({
                error: 'Error while updating'
            })
        }
    },
    async delete(req,res){
        try{
            await Discipline.destroy({
                where: {
                    disciplineID: req.params.disciplineid
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