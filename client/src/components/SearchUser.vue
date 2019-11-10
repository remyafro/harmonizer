<template>
    <v-flex xs3 class="ml-auto mr-auto mt-10">
        <Panel title="Search" xs3>
            <v-card>
                <v-card-text>
                    <v-select
                            color="dark"
                            label="List Of Staff"
                            :items="staffOptions"
                            single-line
                            item-text="userName"
                            item-value="userID"
                            v-model="users.userID"

                    >

                    </v-select>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                                dark
                                color="dark"
                                @click="navigateTo({
                            name: 'user-view',
                            params: {
                            userid : users.userID
                            }
                            })"
                        >Search</v-btn>
                    </v-card-actions>
                </v-card-text>
            </v-card>
        </Panel>
    </v-flex>

</template>

<script>
    import Panel from "@/components/Panel";
    import UsersService from "../services/UsersService";
    export default {
        data () {
            return{
                search: '',
                users: {
                    userID : null,
                    userLogin: null,
                    userPassword: null,
                    userName: null,
                    userContact: null,
                    userEmail: null,
                    disciplineID: null,
                    accountType: null,
                },
                staffOptions: []
            }
        },
        async mounted(){
          this.staffOptions = (await UsersService.staff()).data
            console.log(this.staffOptions)
        },
        components: {
            Panel
        },
        methods: {
            searchUser(){

            },
            navigateTo(route){
                this.$router.push(route)
            }
        }
    }
</script>

<style scoped>

</style>