const AuthenticationController = require('./controller/AuthenticationController');
const UserController = require('./controller/UserController');
const Disciplinecontroller = require('./controller/DisciplineController');
const UnitController = require('./controller/UnitController');
const AssignLoadController = require('./controller/AssignLoadController');
const UserWorkLoadController = require('./controller/UserWorkLoadController')

module.exports = (app) => {
    app.post('/login',
        AuthenticationController.login)


    app.get('/users',
        UserController.index)
    app.get('/staff',
        UserController.staff)
    app.post('/users',
        UserController.post)
    app.get('/user/:userid',
        UserController.show)
    app.put('/user/:userid',
        UserController.put)
    app.delete('/user/:userid',
        UserController.delete)

    app.get('/discipline',
        Disciplinecontroller.index)
    app.post('/disciplines',
        Disciplinecontroller.post)
    app.get('/discipline/:disciplineid',
        Disciplinecontroller.show)
    app.put('/discipline/:disciplineid',
        Disciplinecontroller.put)
    app.delete('/discipline/:disciplineid',
        Disciplinecontroller.delete)

    app.get('/units/:disciplineid',
        UnitController.index)
    app.post('/units',
        UnitController.post)
    app.get('/unit/:unitid',
        UnitController.show)
    app.put('/unit/:unitid',
        UnitController.put)
    app.delete('/unit/:unitid',
        UnitController.delete)


    app.get('/getassign',
        AssignLoadController.index)
    app.get('/csv',
        AssignLoadController.csv)
    app.get('/sumofcas',
        AssignLoadController.sumofcas)
    app.get('/currdisc/:disciplineid',
        AssignLoadController.getUserFromDiscipline)
    app.get('/currunitdisc/:disciplineid',
        AssignLoadController.getUnitFromDiscipline)
    app.get('/currunit/:unitid',
        AssignLoadController.getUnit)
    app.post('/assignload',
        AssignLoadController.post)
    app.get('/assignload/:assignloadid',
        AssignLoadController.show)
    app.post('/assignloads/',
        AssignLoadController.teach)
    app.put('/assignloads/:assignloadid',
        AssignLoadController.put)
    app.post('/assignload/:userid',
        AssignLoadController.updateTeach)
    app.delete('/assignload/:assignloadid',
        AssignLoadController.delete)
    app.post('/assignloadminus/:userid',
        AssignLoadController.minusTeach)

    app.get('/assignuser/:userid',
        UserWorkLoadController.show)
    app.post('/userworkload/',
        UserWorkLoadController.post)
    app.get('/userworkload',
        UserWorkLoadController.index)
    app.get('/userworkload/:userid',
        UserWorkLoadController.edit)
    app.put('/userworkload/:userloadid',
        UserWorkLoadController.put)
    app.delete('/userworkload/:userloadid',
        UserWorkLoadController.delete)
    app.get('/userworkloads/:userid',
        UserWorkLoadController.getpie)
}