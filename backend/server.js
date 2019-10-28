const express =  require('express');
const bodyParser = require('body-parser');
const cors  = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

const db = require('./config/index');

//test DB
db.authenticate()
    .then(() => console.log('Database Connected...'))
    .catch(err => console.log('Error: ' + err))

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());



app.get('/', (req, res) => res.send('INDEX'));



// user routes routes
const userRoute = require('./routes/user');
app.use('/user', userRoute);

const userWorkLoadRoute = require('./routes/userworkload');
app.use('/userworkload', userWorkLoadRoute);

const disciplineRoute = require('./routes/discipline');
app.use('/discipline', disciplineRoute);

const unitRoute = require('./routes/unit');
app.use('/unit', unitRoute);

const assignLoadRoute = require('./routes/assignload');
app.use('/assignload', assignLoadRoute);

const AuthenticationController = require('./controller/AuthenticationController')
app.post('/login',AuthenticationController.login)

app.listen(port , console.log(`Server started on port  ${port}`));