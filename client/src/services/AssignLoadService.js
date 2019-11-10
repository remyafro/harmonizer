import Api from './Api'

export default {
    index (){
        return Api().get('getassign')
    },
    sumofcas(){
        return Api().get('sumofcas')
    },
    getUserFromDiscipline(discID){
        return Api().get(`currdisc/${discID}`)
    },
    getUnitFromDiscipline(discID){
        return Api().get(`currunitdisc/${discID}`)
    },
    getUnit(unitID){
        return Api().get(`currunit/${unitID}`)
    },
    post(assignLoad){
        return Api().post('assignload', assignLoad)
    },
    show(assignLoadID){
        return Api().get(`assignload/${assignLoadID}`)
    },
    teach(userID,teachinghour){
        return Api().post(`assignload/${userID}`, teachinghour)
    }
}