const express = require('express');
const router = express.Router();
const db = require('../config/index.js');
const AssignLoad = require('../models/AssignLoad.js');


router.get('/', (req, res) =>
    AssignLoad.findAll()
        .then(assignloads => {
            console.log(assignloads);
            res.sendStatus(200);
        })
        .catch( err => console.log(err))
);


module.exports = router;