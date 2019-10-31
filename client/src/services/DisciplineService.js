import Api from './Api'

export default {
    index (){
        return Api().get('discipline')
    },
    post (user) {
        return Api().post('users', user)
    }
}