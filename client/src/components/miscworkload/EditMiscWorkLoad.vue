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
                <Panel title="Edit Misc Workload">
                    <v-card>
                        <v-card-text>
                            <v-text-field
                                    color="dark"
                                    label="Work Load Year"
                                    name="assignLoadID"
                                    type="text"
                                    required
                                    :rules="[required]"
                                    v-model="userWorkLoad.workLoadYear"
                            >
                            </v-text-field>
                            <v-text-field
                                    color="dark"
                                    label="Research Hour"
                                    name="assignLoadID"
                                    type="text"
                                    required
                                    :rules="[required]"
                                    v-model="userWorkLoad.researchHour"
                            >
                            </v-text-field>
                            <v-text-field
                                    color="dark"
                                    label="Service Hour"
                                    name="assignLoadID"
                                    type="text"
                                    required
                                    :rules="[required]"
                                    v-model="userWorkLoad.serviceHour"
                            >
                            </v-text-field>
                            <v-text-field
                                    color="dark"
                                    label="Anything Hour"
                                    name="assignLoadID"
                                    type="text"
                                    required
                                    :rules="[required]"
                                    v-model="userWorkLoad.anythingHour"
                            >
                            </v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn dark color="dark" @click="save">Save</v-btn>
                            <v-btn dark color="red" @click="deleteUserWorkLoad">Delete</v-btn>

                        </v-card-actions>
                    </v-card>
                </Panel>
            </v-flex>
            <v-flex xs5>
                <Panel title="User Total Workload">
                    <v-card>
                        <v-card-text class="headline text-left">
                            <p>Name: {{staff.userName }}</p>
                            <p>Current Teaching Hours : {{userWorkLoad.teachingHour}}</p>
                            <p>Total: {{ currTotal }}</p>

                        </v-card-text>


                    </v-card>
                </Panel>


            </v-flex>
        </v-container>
    </v-app>
</template>

<script>
    import Panel from '@/components/Panel';
    import UserWorkLoadService from "../../services/UserWorkLoadService";
    import UsersService from "../../services/UsersService";
    export default {
        data() {
            return{
                userWorkLoad : {
                    userLoadID : null,
                    teachingHour: null,
                    researchHour: null,
                    serviceHour: null,
                    anythingHour: null,
                    userID: null,
                    workLoadYear: null,

                },
                required: (value) => !!value || 'Required.',
                error: null,
                staff: {
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
            const id = this.$store.state.route.params.userloadid
            this.userWorkLoad = (await UserWorkLoadService.edit(id)).data
            const userID = this.$store.state.route.params.userid
            this.staff = (await UsersService.show(userID)).data
        },
        methods: {
            async save() {
                this.error = null;
                const usertotal = parseInt(this.userWorkLoad.teachingHour) + parseInt(this.userWorkLoad.researchHour) + parseInt(this.userWorkLoad.serviceHour) + parseInt(this.userWorkLoad.anythingHour)
                if(this.staff.accountType == 'staff-FT'){
                    if( usertotal > 1380 ){
                        this.error = 'Assigning more than the allowed amount!'
                        return
                    }

                }
                else if(this.staff.accountType == 'staff-PT'){
                    if( usertotal > 1140 ){
                        this.error = 'Assigning more than the allowed amount!'
                        return
                    }
                }
                // const areAllFieldsFilledIn = Object
                //     .keys(this.assignLoad)
                //     .every(key => !!this.assignLoad[key])
                // if (!areAllFieldsFilledIn) {
                //     this.error = 'Please fill in all the fields.'
                //     return
                // }


                try{
                    await UserWorkLoadService.put(this.userWorkLoad)

                    this.$router.push({
                        name: 'miscworkload'
                    })
                }catch (err) {
                    this.error = 'Error!'
                    console.log(err)
                }


            },
            async deleteUserWorkLoad() {
                await UserWorkLoadService.delete(this.userWorkLoad)

                this.$router.push({
                    name: 'miscworkload'
                })

            },
        },
        computed: {
          currTotal : function() {
              const total = parseInt(this.userWorkLoad.teachingHour) + parseInt(this.userWorkLoad.researchHour) + parseInt(this.userWorkLoad.serviceHour) + parseInt(this.userWorkLoad.anythingHour)

              return total;
          }
        },
        components: {
            Panel
        }
    }
</script>

<style scoped>

</style>