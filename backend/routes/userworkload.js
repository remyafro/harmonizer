const express = require('express');
const router = express.Router();
const db = require('../config/index.js');
const UserWorkLoad = require('../models/UserWorkLoad.js');


router.get('/', (req, res) =>
    UserWorkLoad.findAll()
        .then(userworkload => {
            console.log(userworkload);
            res.sendStatus(200);
        })
        .catch( err => console.log(err))
);


module.exports = router;