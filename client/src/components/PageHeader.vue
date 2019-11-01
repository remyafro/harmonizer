<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title class="mr-4">
            <router-link
                    class="home"
                    tag="span"
                    :to="{
          name: 'login'
        }">
                Harmonizer
            </router-link>
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn
                    v-if=" ($store.state.permission !== 'staff') && $store.state.isUserLoggedIn "
                    text
                    dark
                    :to="{
          name: 'user'
        }">
                Users
            </v-btn>
            <v-btn
                    v-if=" ($store.state.permission !== 'staff') && $store.state.isUserLoggedIn "
                    text
                    dark
                    :to="{
          name: 'unit'
        }">
                Unit
            </v-btn>
            <v-btn
                    v-if=" ($store.state.permission !== 'staff') && $store.state.isUserLoggedIn "
                    text
                    dark
                    :to="{
          name: 'discipline'
        }">
                Discipline
            </v-btn>
            <v-btn
                    v-if=" ($store.state.permission == 'admin') && $store.state.isUserLoggedIn "
                    text
                    dark
                    :to="{
          name: 'unit'
        }">
                Staff
            </v-btn>
            <v-btn
                    v-if=" $store.state.isUserLoggedIn "
                    text
                    dark
                    :to="{
          name: 'unit'
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
</style>
