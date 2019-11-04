<template>
    <v-app>
        <v-container
                class="fill-height align-start"
        >
            <v-flex xs7 class="mr-4">
                <v-alert
                        v-if="error"
                        dismissible
                        type="error">{{ error }}</v-alert>
                <Panel title="Assign Workload">
                    <v-card>
                        <v-card-text>
                            <v-text-field
                                    color="cyan"
                                    label="Assign Load ID"
                                    name="assignLoadID"
                                    type="text"
                                    required
                                    :rules="[required]"
                                    v-model="assignLoad.assignLoadID"
                            >
                            </v-text-field>
                            <v-select
                                    color="dark"
                                    label="Select Unit"
                                    single-line
                                    :items="unitOptions"
                                    item-text="unitName"
                                    item-value="unitID"
                                    v-model="assignLoad.assignLoadID"

                            >
                            </v-select>
                            <v-select
                                    color="dark"
                                    label="Select Staff"
                                    single-line
                                    :items="staffOptions"
                                    item-text="userName"
                                    item-value="userID"
                                    v-model="assignLoad.userID"
                                    @change="onChangeStaff"

                            >
                            </v-select>

                            <v-text-field
                                    color="cyan"
                                    label="Assignment Hour"
                                    required
                                    :rules="[required]"
                                    type="text"
                                    v-model="assignLoad.assignLoadID"

                            >

                            </v-text-field>
                            <v-text-field
                                    color="cyan"
                                    label="Exam Hour"
                                    required
                                    :rules="[required]"
                                    type="text"
                                    v-model="assignLoad.assignLoadID"

                            >

                            </v-text-field>
                            <v-text-field
                                    color="cyan"
                                    label="Tutorial Hour"
                                    required
                                    :rules="[required]"
                                    type="text"
                                    v-model="assignLoad.assignLoadID"

                            >

                            </v-text-field>
                            <v-text-field
                                    color="cyan"
                                    label="Sup Ass Hour"
                                    required
                                    :rules="[required]"
                                    type="text"
                                    v-model="assignLoad.assignLoadID"

                            >

                            </v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn dark color="cyan" @click="create">Create User</v-btn>
                        </v-card-actions>
                    </v-card>
                </Panel>
            </v-flex>
            <v-flex xs4>
                <Panel title="Current User Selected">
                    <v-card>
                        <v-card-text class="headline text-left"
                                     v-for="user in currentUser" :key="user.userID"
                        >
                            <p>Name: {{ user.userName }}</p>
                            <p>Total Load: {{ parseInt(user.teachingHour) + parseInt(user.researchHour) + parseInt(user.serviceHour) + parseInt(user.anythingHour) }}</p>


                        </v-card-text>
                    </v-card>
                </Panel>

                <Panel title="Casual" class="mt-5">
                    <v-card>
                        <v-card-text class="headline">
                        dsadsa
                        </v-card-text>


                    </v-card>
                </Panel>
            </v-flex>
        </v-container>
        <v-row class="justify-space-around mr-auto ml-auto">
            <v-col>

            </v-col>
        </v-row>
    </v-app>
</template>

<script>
    import Panel from '@/components/Panel'
    import UnitService from "@/services/UnitService";
    import AssignLoadService from "@/services/AssignLoadService";
    import UserWorkLoadService from "../../services/UserWorkLoadService";
    export default {
        data() {
            return{
                assignLoad: {
                    assignLoadID : null,
                    assignmentHour: null,
                    examHour: null,
                    tutorialHour: null,
                    supAssHour: null,
                    assignmentCasualHour: null,
                    examCasualHour: null,
                    tutorialCasualHour: null,
                    supAssCasualHour: null,
                    userID: null,
                    unitID: null,

                },
                required: (value) => !!value || 'Required.',
                error: null,
                staff: null,
                staffOptions : [],
                unit: null,
                unitOptions: [],
                currentUser : null,
                currentUserLoad: null,
            }

        },
        async mounted(){
            const currDisc = this.$store.state.discipline;
            this.unit = (await AssignLoadService.getUnitFromDiscipline(currDisc)).data
            this.unitOptions = this.unit;
            this.staff = (await AssignLoadService.getUserFromDiscipline(currDisc)).data
            this.staffOptions = this.staff;
        },
        methods: {
            async create() {
                this.error = null;
                const areAllFieldsFilledIn = Object
                    .keys(this.unit)
                    .every(key => !!this.unit[key])
                if (!areAllFieldsFilledIn) {
                    console.log(this.unit);
                    this.error = 'Please fill in all the required fields.'
                    return
                }

                try{
                    await UnitService.post(this.unit)
                    this.$router.push({
                        name: 'unit'
                    })
                }catch (err) {
                    console.log(err)
                }

            },
            async onChangeStaff() {
                const b = this.currentUser = (await UserWorkLoadService.show(this.assignLoad.userID)).data
                var teachingHour
                var researchHour
                var serviceHour
                var anythingHour

                for(const key in b){
                    var value = b[key]
                    teachingHour = value.teachingHour
                    researchHour = value.researchHour
                    serviceHour = value.serviceHour
                    anythingHour = value.anythingHour
                }

                this.currentUserLoad = parseInt(researchHour) + parseInt(teachingHour) + parseInt(serviceHour) + parseInt(anythingHour)

                console.log(this.currentUserLoad)
            }
        },
        components: {
            Panel
        }
    }
</script>

<style scoped>

</style>