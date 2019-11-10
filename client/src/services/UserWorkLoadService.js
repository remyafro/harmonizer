import Api from './Api'

export default {
    index (){
        return Api().get('users')
    },
    post (user) {
        return Api().post('userworkload', user)
    },
    show (userID){
        return Api().get(`assignuser/${userID}`)
    },
    put (user){
        return Api().put(`user/${user.userID}`, user)
    },
    delete (user){
        return Api().delete(`user/${user.userID}`,user)
    },
    staff(){
        return Api().get('staff')
    },
    teach(userID,newLoad){
        return Api().post(`userworkloads/${userID}`, newLoad)
    }
}