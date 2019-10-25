const express =  require('express');
const cors  = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

const db = require('./config/index');

//test DB
db.authenticate()
    .then(() => console.log('Database Connected...'))
    .catch(err => console.log('Error: ' + err))

app.use(cors());
app.use(express.json());



app.get('/', (req, res) => res.send('INDEX'));



//account routes
const accountRoute = require('./routes/account');
app.use('/account', accountRoute);

const adminRoute = require('./routes/admin');
app.use('/admin', adminRoute);

app.listen(port , console.log(`Server started on port  ${port}`));