const {User} = require('../models');

module.exports = {
    async index(req,res){
        try{
            const user = User.create(req.body)
            res.send(user)

        } catch(err){
            res.status(400).send({
                error: 'Broke here'
            })
        }
    },
    async post(req,res){
        try{
            const user = User.create(req.body)
            res.send(user)

        } catch(err){
            res.status(400).send({
                error: 'Broke here'
            })
        }
    }

}