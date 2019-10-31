import Api from './Api'

export default {
    index (){
        return Api().get('users')
    },
    post (user) {
      return Api().post('users', user)
    },
    show (userID){
        return Api().get(`user/${userID}`)
    },
    put (user){
        return Api().put(`user/${user.userID}`, user)
    }
}