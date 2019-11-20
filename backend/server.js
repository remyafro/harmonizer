const express =  require('express');
const bodyParser = require('body-parser');
const cors  = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');
const config = require('./config/config');
const serveStatic = require('serve-static');

const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(serveStatic("../client/dist"));

require('./routes')(app)

sequelize.sync()
    .then(() => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
        console.log(process.env.baseURL)
    })