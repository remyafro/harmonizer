<template>
    <v-app>
        <v-content>
            <v-container
                    class="fill-height justify-center align-center"
                    fluid
            >
            <Panel title="Users">
                <router-link
                        slot="action"
                        :to="{name: 'user-create'}" >

                    <v-btn
                        class="pink lighten-2 delete"
                        light
                        medium
                        absolute
                        right
                        middle
                        fab
                    >
                        <v-icon>add</v-icon>


                    </v-btn>
                </router-link>
                <v-simple-table class="mt-5">
                    <thead>
                    <tr>
                        <th class="text-center">User ID</th>
                        <th class="text-center">User Login</th>
                        <th class="text-center">User Password</th>
                        <th class="text-center">User Name</th>
                        <th class="text-center">User Contact</th>
                        <th class="text-center">User Email</th>
                        <th class="text-center">Discipline ID</th>
                        <th class="text-center">Account Type</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="user in users" :key="user.userID">
                        <td>{{ user.userID }}</td>
                        <td>{{ user.userLogin }}</td>
                        <td>{{ user.userPassword }}</td>
                        <td>{{ user.userName }}</td>
                        <td>{{ user.userContact }}</td>
                        <td>{{ user.userEmail }}</td>
                        <td>{{ user.disciplineID }}</td>
                        <td>{{ user.accountType }}</td>
                        <td><v-btn
                            @click="navigateTo({
                            name: 'user-edit',
                            params: {
                            userid : user.userID
                            }
                            })"
                        >
                            Edit</v-btn></td>
                    </tr>
                    </tbody>
                </v-simple-table>
            </Panel>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import Panel from '@/components/Panel'
    import UserService from '@/services/UsersService'
    export default{
        components: {
            Panel
        },
        data() {
            return {
                users : null
            }
        },
        methods: {
            navigateTo(route){
                this.$router.push(route)
            },

        },
        async mounted () {
            this.users = (await UserService.index()).data
        }
    }
</script>

<style>
</style>