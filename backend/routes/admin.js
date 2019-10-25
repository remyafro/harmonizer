const express = require('express');
const router = express.Router();
const db = require('../config/index.js');
const Admin = require('../models/Admin.js');


router.get('/', (req, res) =>
    Admin.findAll()
        .then(admin => {
            console.log(admin);
            res.sendStatus(200);
        })
        .catch( err => console.log(err))
);


module.exports = router;