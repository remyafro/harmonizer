const express = require('express');
const router = express.Router();
const db = require('../config/index.js');
const Unit = require('../models/Unit.js');


router.get('/', (req, res) =>
    Unit.findAll()
        .then(units => {
            console.log(units);
            res.sendStatus(200);
        })
        .catch( err => console.log(err))
);


module.exports = router;