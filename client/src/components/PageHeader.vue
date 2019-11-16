<template>
    <v-toolbar fixed class="primary" dark>
        <v-toolbar-title class="mr-4">
            <router-link
                    class="home"
                    tag="span"
                    :to="{
          name: 'login'
        }">
                <img class="appLogo" src="../assets/logo-murdoch.png" alt="">
            </router-link>
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn
                    v-if=" ($store.state.permission === 'admin') && $store.state.isUserLoggedIn "
                    text
                    dark
                    :to="{
          name: 'user'
        }">
                Users
            </v-btn>
            <v-btn
                    v-if="  ($store.state.permission === 'hod') && $store.state.isUserLoggedIn "
                    text
                    dark
                    :to="{
          name: 'unit'
        }">
                Unit
            </v-btn>
            <v-btn
                    v-if=" ($store.state.permission === 'admin') && $store.state.isUserLoggedIn "
                    text
                    dark
                    :to="{
          name: 'discipline'
        }">
                Discipline
            </v-btn>
            <v-btn
                    v-if=" ($store.state.permission === 'hod') && $store.state.isUserLoggedIn "
                    text
                    dark
                    :to="{
          name: 'workload'
        }">
                Assign Workload
            </v-btn>
            <v-btn
                    v-if=" ($store.state.permission !== 'staff-FT')  && ($store.state.permission !== 'staff-PT')  && $store.state.isUserLoggedIn "
                    text
                    dark
                    :to="{
          name: 'miscworkload'
        }">
                Misc Workload
            </v-btn>
            <v-btn
                    v-if="$store.state.isUserLoggedIn"
                    text
                    dark
                    :to="{
          name: 'user-search'
        }">
                View Workload
            </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn
                    v-if="!$store.state.isUserLoggedIn"
                    text
                    dark
                    :to="{
          name: 'login'
        }">
                Login
            </v-btn>

            <v-btn
                    v-if="$store.state.isUserLoggedIn"
                    text
                    dark
                    @click="logout">
                Log Out
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        methods: {
            logout () {
                this.$store.dispatch('setToken', null)
                this.$store.dispatch('setUser', null)
                this.$router.push({
                    name: 'login'
                })
            }
        }
    }
</script>

<style scoped>
    .home {
        cursor: pointer;
    }

    .home:hover {
        color: #E9E;
    }
    .baseColor{
        background-color: #dc032a;
    }
    .appLogo{
        max-height: 64px;
    }
</style>
