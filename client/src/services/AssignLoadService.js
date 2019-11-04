import Api from './Api'

export default {
    index (){
        return Api().get('getassign')
    },
    sumofcas(){
        return Api().get('sumofcas')
    }
}