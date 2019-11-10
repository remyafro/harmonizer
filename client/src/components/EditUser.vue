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
                            <v-btn dark color="dark" @click="save">Save User</v-btn>
                            <v-btn dark color="red" @click="deleteUser">Delete User</v-btn>
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
    export default {
        data() {
            return{
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
                accounts: ['admin','staff-PT','staff-FT','hod'],
                disciplineOptions: [],
                disciplines: null,
                required: (value) => !!value || 'Required.',
                error: null
            }

        },
        async mounted(){

                const userID = this.$store.state.route.params.userid

                console.log(this.$store.state);
                this.user = (await UsersService.show(userID)).data

            this.disciplines = (await DisciplineService.index()).data
            this.disciplineOptions = this.disciplines
        },
        methods: {
            async save() {
                try {
                    this.error = null;
                    const areAllFieldsFilledIn = Object
                        .keys(this.user)
                        .every(key => !!this.user[key])
                    if (!areAllFieldsFilledIn) {
                        this.error = 'Please fill in all the required fields.'
                        return
                    }
                    await UsersService.put(this.user)
                    this.$router.push({
                        name: 'user'
                    })
                } catch (err) {
                    console.log(err)
                }

            },
            async deleteUser() {
                    await UsersService.delete(this.user)
                    this.$router.push({
                        name: 'user'
                    })

            }
        },
        components: {
            Panel
        }
    }
</script>

<style scoped>

</style>