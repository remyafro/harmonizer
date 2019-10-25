const express = require('express');
const router = express.Router();
const db = require('../config/index.js');
const Account = require('../models/Account.js');


router.get('/', (req, res) =>
    Account.findAll()
        .then(account => {
            console.log(account);
            res.sendStatus(200);
        })
        .catch( err => console.log(err))
);


module.exports = router;