import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Unit from '@/components/Unit.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: 'login'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/unit',
            name: 'unit',
            component: Unit
        }

    ]
})