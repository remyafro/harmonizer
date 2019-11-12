import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login.vue'

import User from '@/components/User.vue'
import CreateUser from '@/components/CreateUser.vue'
import ViewUser from '@/components/ViewUser.vue'
import EditUser from '@/components/EditUser.vue'
import SearchUser from "@/components/SearchUser.vue";

import AdminDashboard from "@/components/dashboards/AdminDashboard";
import HodDashboard from "@/components/dashboards/HodDashboard";
import StaffDashboard from "@/components/dashboards/StaffDashboard";

import Unit from "@/components/unit/Unit";
import CreateUnit from "@/components/unit/CreateUnit";
import EditUnit from "@/components/unit/EditUnit";
import ViewUnit from "@/components/unit/ViewUnit";

import Discipline from "../src/components/discipline/Discipline";
import CreateDiscipline from "../src/components/discipline/CreateDiscipline";
import EditDiscipline from "../src/components/discipline/EditDiscipline";

import WorkLoad from "../src/components/workload/WorkLoad";
import CreateWorkLoad from "../src/components/workload/CreateWorkLoad";
import EditWorkLoad from "../src/components/workload/EditWorkLoad";

import MiscWorkLoad from "../src/components/miscworkload/MiscWorkLoad";
import EditMiscWorkLoad from "../src/components/miscworkload/EditMiscWorkLoad";


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/admin-dashboard',
            name: 'admin-dashboard',
            component: AdminDashboard
        },
        {
            path: '/staff-dashboard',
            name: 'staff-dashboard',
            component: StaffDashboard
        },
        {
            path: '/hod-dashboard',
            name: 'hod-dashboard',
            component: HodDashboard
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
            name: 'user-view',
            component: ViewUser
        },
        {
            path: '/user/:userid/edit',
            name: 'user-edit',
            component: EditUser
        },
        {
          path: '/user/search',
          name: 'user-search',
          component: SearchUser
        },
        {
            path: '/unit',
            name: 'unit',
            component: Unit
        },
        {
            path: '/unit/create',
            name: 'unit-create',
            component: CreateUnit
        },
        {
            path: '/user/:unitid',
            name: 'viewunit',
            component: ViewUnit
        },
        {
            path: '/unit/:unitid/edit',
            name: 'unit-edit',
            component: EditUnit
        },
        {
            path: '/discipline',
            name: 'discipline',
            component: Discipline
        },
        {
            path: '/discipline/create',
            name: 'discipline-create',
            component: CreateDiscipline
        },
        {
            path: '/discipline/:disciplineid/edit',
            name: 'discipline-edit',
            component: EditDiscipline
        },
        {
            path: '/workload',
            name: 'workload',
            component: WorkLoad
        },
        {
            path: '/workload/create',
            name: 'workload-create',
            component: CreateWorkLoad
        },
        {
            path: '/workload/:assignloadid/edit',
            name: 'workload-edit',
            component: EditWorkLoad
        },
        {
            path: '/miscworkload',
            name: 'miscworkload',
            component: MiscWorkLoad
        },
        {
            path: '/miscworkload/:userloadid/edit',
            name: 'miscworkload-edit',
            component: EditMiscWorkLoad
        }

    ]
})