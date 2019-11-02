<template>
    <v-app>
            <v-container
                class="fill-height align-start"
        >
            <v-flex xs6 class="mr-4">
                <Panel title="User Data">
                    <v-card>
                        <v-card-text>
                          <p>User ID: {{ user.userID }}</p>
                           <p>User Name: {{ user.userName }}</p>
                            <p>User Email : {{ user.userEmail }}</p>

                        </v-card-text>
                    </v-card>
                </Panel>
            </v-flex>
            <v-flex xs5>
                <Panel title="User Individual Data">
                    <v-card>
                        <v-card-text>
                            <UserPieChart></UserPieChart>
                        </v-card-text>

                    </v-card>
                </Panel>
            </v-flex>
        </v-container>
        <v-container>
            <v-flex xs12>
                <Panel title="User Collective Data" class="justify-center">
                    <v-card>
                        <v-card-text>
                            <UserBarGraph></UserBarGraph>
                        </v-card-text>
                    </v-card>
                </Panel>
            </v-flex>
        </v-container>

    </v-app>
</template>

<script>
   import UsersService from "../services/UsersService";
   import Panel from '@/components/Panel'
   import UserPieChart from "@/components/UserPieChart";
   import UserBarGraph from "@/components/UserBarGraph";

    export default {
        data () {
            return {
                user: {
                    userID : null,
                    userLogin: null,
                    userPassword: null,
                    userName: null,
                    userContact: null,
                    userEmail: null,
                    disciplineID: null,
                    accountType: null,
                },
            }
        },
        async mounted () {
           const userID = this.$store.state.route.params.userid
            this.user = ( await UsersService.show(userID)).data


        },
        components: {
            Panel,
            UserPieChart,
            UserBarGraph
        }
    }
</script>

<style scoped>

</style>