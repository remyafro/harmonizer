import Api from './Api'

export default {
    index (){
        return Api().get('workloads')
    },
    post (workload) {
        return Api().post('workloads', workload)
    },
    show (workloadID){
        return Api().get(`workload/${workloadID}`)
    },
    put (workload){
        return Api().put(`workload/${workload.workloadID}`, workload)
    },
    delete (workload){
        return Api().delete(`workload/${workload.workloadID}`,workload)
    }
}