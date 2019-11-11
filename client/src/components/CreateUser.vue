<template>
    <v-app>
            <v-container
            class="fill-height align-start"
            >
                <v-flex xs6 class="mr-4">
                    <v-alert
                            v-if="error"
                            dismissible
                            type="error">{{ error }}</v-alert>
                    <Panel title="User Metadata">
                        <v-card>
                            <v-card-text>
                                <v-text-field
                                        color="dark"
                                        label="User ID"
                                        type="text"
                                        required
                                        :rules="[required]"
                                        v-model="user.userID"
                                >
                                </v-text-field>
                                <v-text-field
                                        color="dark"
                                        label="User Login"
                                        type="text"
                                        required
                                        :rules="[required]"
                                        v-model="user.userLogin"
                                >

                                </v-text-field>
                                <v-text-field
                                        color="dark"
                                        label="User Password"
                                        required
                                        :rules="[required]"
                                        type="password"
                                        v-model="user.userPassword"
                                >

                                </v-text-field>
                                <v-text-field
                                        color="dark"
                                        label="User Name"
                                        required
                                        :rules="[required]"
                                        type="text"
                                        v-model="user.userName"
                                >

                                </v-text-field>
                                <v-text-field
                                        color="dark"
                                        label="User Contact"
                                        required
                                        :rules="[required]"
                                        type="text"
                                        v-model="user.userContact"
                                >

                                </v-text-field>
                                <v-text-field
                                        color="dark"
                                        label="User Email"
                                        required
                                        :rules="[required]"
                                        hint="Ending with @murdoch.edu.au"
                                        persistent-hint
                                        type="text"
                                        v-model="user.userEmail"
                                >

                                </v-text-field>
                            </v-card-text>
                        </v-card>
                    </Panel>
                </v-flex>
                <v-flex xs5>
                    <Panel title="User Metadata">
                        <v-card>
                            <v-card-text>

                                <v-select
                                        color="dark"
                                        label="Discipline ID"
                                        :items="disciplineOptions"
                                        single-line
                                        item-text="disciplineName"
                                        item-value="disciplineID"
                                        v-model="user.disciplineID"
                                >

                                </v-select>
                                <v-select
                                        color="dark"
                                        label="Account Type"
                                        :items="accounts"
                                        v-model="user.accountType"
                                >

                                </v-select>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn dark color="dark" @click="create">Create User</v-btn>
                            </v-card-actions>
                        </v-card>
                    </Panel>
                </v-flex>
            </v-container>
    </v-app>
</template>

<script>
    import Panel from '@/components/Panel'
    import UsersService from "../services/UsersService";
    import DisciplineService from "../services/DisciplineService";
    import UserWorkLoadService from "../services/UserWorkLoadService";
    export default {
        data() {
            return{
                user: {
                    userID : Math.floor(Math.random() * 10001) + 1,
                    userLogin: null,
                    userPassword: null,
                    userName: null,
                    userContact: null,
                    userEmail: null,
                    disciplineID: null,
                    accountType: null,
                },
                accounts: ['admin','staff-PT','staff-FT','hod'],
                disciplineOptions: [],
                disciplines: null,
                required: (value) => !!value || 'Required.',
                error: null
            }

        },
        async mounted(){
            this.disciplines = (await DisciplineService.index()).data
            this.disciplineOptions = this.disciplines
        },
        methods: {
            async create() {
                this.error = null;
                const areAllFieldsFilledIn = Object
                    .keys(this.user)
                    .every(key => !!this.user[key])
                if (!areAllFieldsFilledIn) {
                    console.log(this.user);
                    this.error = 'Please fill in all the required fields.'
                    return
                }

                if(this.user.accountType != 'admin'){
                    try{
                        await UsersService.post(this.user)
                        await UserWorkLoadService.post(this.user)
                        this.$router.push({
                            name: 'user'
                        })
                    }catch (err) {
                        console.log(err)
                    }
                }
                else {
                    try{
                        await UsersService.post(this.user)
                        this.$router.push({
                            name: 'user'
                        })
                    }catch (err) {
                        console.log(err)
                    }
                }

            }
        },
        components: {
            Panel
        }
    }
</script>

<style scoped>

</style>