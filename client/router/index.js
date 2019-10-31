import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import User from '@/components/User.vue'
import CreateUser from '@/components/CreateUser.vue'
import ViewUser from '@/components/ViewUser.vue'
import EditUser from '@/components/EditUser.vue'

import AdminDashboard from "@/components/dashboards/AdminDashboard";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: 'admin',
            name: 'admin-dashboard',
            components: AdminDashboard
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/user',
            name: 'user',
            component: User
        },
        {
            path: '/user/create',
            name: 'user-create',
            component: CreateUser
        },
        {
            path: '/user/:userid',
            name: 'viewuser',
            component: ViewUser
        },
        {
            path: '/user/:userid/edit',
            name: 'user-edit',
            component: EditUser
        }

    ]
})