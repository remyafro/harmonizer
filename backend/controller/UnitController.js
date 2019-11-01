const {User} = require('../models');

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
            console.log(req.body)
            const user = await User.create(req.body)
            res.send(user)

        } catch(err){
            res.status(400).send({
                error: 'Error while trying to create User'
            })
        }
    },
    async show(req,res){
        try{
            const user =  await User.findByPk(req.params.userid)
            res.send(user)
        } catch(err){
            res.status(400).send({
                error: 'Error while fetching User'
            })
        }
    },
    async put(req,res){
        try{
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

}