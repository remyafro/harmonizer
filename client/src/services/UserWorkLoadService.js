import Api from './Api'

export default {
    index (){
        return Api().get('userworkload')
    },
    post (user) {
        return Api().post('userworkload', user)
    },
    show (userID){
        return Api().get(`assignuser/${userID}`)
    },
    put (userworkload){
        return Api().put(`userworkload/${userworkload.userLoadID}`, userworkload)
    },
    delete (userworkload){
        return Api().delete(`userworkload/${userworkload.userLoadID}`,userworkload)
    },
    staff(){
        return Api().get('staff')
    },
    teach(userID,newLoad){
        return Api().post(`userworkloads/${userID}`, newLoad)
    },
    edit(userID){
        return Api().get(`userworkload/${userID}`)
    }
}