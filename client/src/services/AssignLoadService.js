import Api from './Api'

export default {
    index (){
        return Api().get('getassign')
    },
    csv (){
        return Api().get('csv')
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
    teach(teachinghour){
        return Api().post('assignloads/', teachinghour)
    },
    put(assignLoad){
        return Api().put(`assignloads/${assignLoad.assignLoadID}`, assignLoad)
    },
    updateTeach(obj){
        return Api().post(`assignload/${obj.userid}`, obj)
    },
    delete (assignload){
        return Api().delete(`assignload/${assignload.assignLoadID}`, assignload)
    },
    minusTeach(obj){
        return Api().post(`assignloadminus/${obj.userid}`, obj)
    }
}