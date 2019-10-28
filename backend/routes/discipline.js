const express = require('express');
const router = express.Router();
const db = require('../config/index.js');
const Discipline = require('../models/Discipline.js');


router.get('/', (req, res) =>
    Discipline.findAll()
        .then(disciplines => {
            console.log(disciplines);
            res.sendStatus(200);
        })
        .catch( err => console.log(err))
);


module.exports = router;