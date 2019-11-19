import Api from './Api'

export default {
    index (disciplineid){
        return Api().get(`units/${disciplineid}`)
    },
    post (unit) {
        return Api().post('units', unit)
    },
    show (unitID){
        return Api().get(`unit/${unitID}`)
    },
    put (unit){
        return Api().put(`unit/${unit.unitID}`, unit)
    },
    delete (unit){
        return Api().delete(`unit/${unit.unitID}`,unit)
    },
}