import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false,
        permission: null,
        discipline: null,
    },
    mutations: {
        setToken (state, token) {
            state.token = token
            if (token) {
                state.isUserLoggedIn = true
            }else{
                state.isUserLoggedIn = false
            }
        },
        setUser (state, user) {
            state.user = user
        },
        setPermission (state, permission){
            state.permission = permission
        },
        setDiscipline (state, discipline){
            state.discipline = discipline
        }
    },
    actions: {
        setToken ({commit}, token) {
            commit('setToken', token)
        },
        setUser ({commit}, user) {
            commit('setUser', user)
        },
        setPermission ({commit}, permission) {
            commit('setPermission', permission)
        },
        setDiscipline ( {commit}, discipline ){
            commit('setDiscipline', discipline)
        }
    }


})