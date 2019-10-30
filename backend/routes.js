const AuthenticationController = require('./controller/AuthenticationController');

module.exports = (app) => {
    app.post('/login',
        AuthenticationController.login)
}