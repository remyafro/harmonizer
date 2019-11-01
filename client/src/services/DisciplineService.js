import Api from './Api'

export default {
    index (){
        return Api().get('discipline')
    },
    post (discipline) {
        return Api().post('disciplines', discipline)
    },
    show (disciplineID){
        return Api().get(`discipline/${disciplineID}`)
    },
    put (discipline){
        return Api().put(`discipline/${discipline.disciplineID}`, discipline)
    },
    delete (discipline){
        return Api().delete(`discipline/${discipline.disciplineID}`, discipline)
    }
}