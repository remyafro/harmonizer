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
                <Panel title="Assign Workload">
                    <v-card>
                        <v-card-text>
                            <v-text-field
                                    color="dark"
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
                                    label="Select Staff"
                                    single-line
                                    :items="staffOptions"
                                    item-text="userName"
                                    item-value="userID"
                                    v-model="assignLoad.userID"
                                    @change="onChangeStaff"

                            >
                            </v-select>
                            <v-select
                                    color="dark"
                                    label="Select Unit"
                                    single-line
                                    :items="unitOptions"
                                    item-text="unitName"
                                    item-value="unitID"
                                    v-model="assignLoad.unitID"
                                    @change="onChangeUnit"

                            >
                            </v-select>

                            <v-text-field
                                    color="dark"
                                    label="Assignment Hour Assigned to Staff"
                                    required
                                    :rules="[required]"
                                    type="text"
                                    v-model="assignLoad.assignmentHour"

                            >

                            </v-text-field>

                            <v-text-field
                                    color="dark"
                                    label="Assignment Hour Assigned to Casual"
                                    required
                                    :rules="[required]"
                                    type="text"
                                    v-model="assignLoad.assignmentCasualHour"

                            >

                            </v-text-field>
                            <v-text-field
                                    color="dark"
                                    label="Exam Hour Assigned to Staff"
                                    required
                                    :rules="[required]"
                                    type="text"
                                    v-model="assignLoad.examHour"

                            >

                            </v-text-field>
                            <v-text-field
                                    color="dark"
                                    label="Exam Hour Assigned to Casual"
                                    required
                                    :rules="[required]"
                                    type="text"
                                    v-model="assignLoad.examCasualHour"

                            >

                            </v-text-field>
                            <v-text-field
                                    color="dark"
                                    label="Tutorial Hour Assigned to Staff"
                                    required
                                    :rules="[required]"
                                    type="text"
                                    v-model="assignLoad.tutorialHour"

                            >

                            </v-text-field>
                            <v-text-field
                                    color="dark"
                                    label="Tutorial Hour Assigned to Casual"
                                    required
                                    :rules="[required]"
                                    type="text"
                                    v-model="assignLoad.tutorialCasualHour"

                            >

                            </v-text-field>
                            <v-text-field
                                    color="dark"
                                    label="Supp. Assessment Hour Assigned to Staff"
                                    required
                                    :rules="[required]"
                                    type="text"
                                    v-model="assignLoad.supAssHour"

                            >

                            </v-text-field>
                            <v-text-field
                                    color="dark"
                                    label="Supp. Assessment Hour Assigned to Casual"
                                    required
                                    :rules="[required]"
                                    type="text"
                                    v-model="assignLoad.supAssCasualHour"

                            >

                            </v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn dark color="dark" @click="create">Assign</v-btn>
                        </v-card-actions>
                    </v-card>
                </Panel>
            </v-flex>
            <v-flex xs5>
                <Panel title="Current User Selected"  class="mb-5" v-if="currentUser">
                    <v-card>
                        <v-card-text class="headline text-left font-weight-bold"
                                     v-for="user in currentUser" :key="user.userID"
                        >
                            <p>Name: {{ user.userName }}</p>
                            <p>User Type: {{ user.accountType }}</p>
                            <p>Teaching Hours: {{ user.teachingHour }}</p>
                            <p>Research Hours: {{ user.researchHour }} </p>
                            <p>Service Hours: {{ user.serviceHour }} </p>
                            <p>Misc Hours: {{ user.anythingHour }}</p>
                            <p>Total: {{ parseInt(user.teachingHour) + parseInt(user.researchHour) + parseInt(user.serviceHour) + parseInt(user.anythingHour) }}</p>


                        </v-card-text>
                    </v-card>
                </Panel>

                <Panel title="Base Hours For Unit" class="mb-5" v-if="currentUnitAssignmentHourLeft">
                    <v-card>
                        <v-card-text class="headline text-left font-weight-bold">
                            <p>Assignment Hours : {{ currentUnitAssignmentHourLeft }} </p>
                            <p>Exam Hours : {{ currentUnitExamHourLeft }}</p>
                            <p>Tutorial Hours: {{ currentUnitTutorialHourLeft }}</p>
                        </v-card-text>


                    </v-card>
                </Panel>

                <Panel title="Projected total Hours for this unit">
                    <v-card>
                        <v-card-text class="headline font-weight-bold">
                            <p>Total: {{ currUnitTotalLoad }}</p>
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
                    assignLoadID : Math.floor(Math.random() * 10001) + 1,
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
                currentUnitLoad : null,
                currentUserType: null,
                currentUserID : null,

                currentUnitTutorialHourLeft: null,
                currentUnitAssignmentHourLeft: null,
                currentUnitExamHourLeft: null,
                newUserWorkLoad: null,
                workloadToBeAdded: null,
            }

        },
        async mounted(){
            const currDisc = this.$store.state.discipline;
            this.unit = (await AssignLoadService.getUnitFromDiscipline(currDisc)).data
            this.unitOptions = this.unit;
            this.staff = (await AssignLoadService.getUserFromDiscipline(currDisc)).data
            this.staffOptions = this.staff;
            this.currentUnitLoad = (await UnitService.show(this.assignLoad.unitID)).data
        },
        methods: {
            async create() {
                this.error = null;
                const areAllFieldsFilledIn = Object
                    .keys(this.assignLoad)
                    .every(key => !!this.assignLoad[key])
                if (!areAllFieldsFilledIn) {
                    this.error = 'Please fill in all the fields.'
                    return
                }

                this.workloadToBeAdded = parseInt(this.assignLoad.assignmentHour) + parseInt(this.assignLoad.examHour) + parseInt(this.assignLoad.tutorialHour) + parseInt(this.assignLoad.supAssHour)
                this.newUserWorkLoad = this.currentUserLoad + this.workloadToBeAdded
                console.log(this.currentUserType)
                if( this.currentUserType == 'staff-FT' ){
                    if ( this.newUserWorkLoad > 1380 ){
                        this.error = 'User has too much teaching workload! Please select another user or assign to casual!'
                        return
                    }
                }
                if( this.currentUserType == 'staff-PT' ){
                    if ( this.newUserWorkLoad > 1104 ){
                        this.error = 'User has too much teaching workload! Please select another user or assign to casual!'
                        return
                    }
                }

                if ( ( parseInt(this.assignLoad.assignmentHour) + parseInt(this.assignLoad.assignmentCasualHour)) !=  parseInt(this.currentUnitAssignmentHourLeft)  ){
                    this.error = 'Invalid Assignment Hours!'

                    return
                }
                if ( ( parseInt(this.assignLoad.tutorialHour) + parseInt(this.assignLoad.tutorialCasualHour)) !=  parseInt(this.currentUnitTutorialHourLeft)  ){
                    this.error = 'Invalid Tutorial Hours!'

                    return
                }
                if ( ( parseInt(this.assignLoad.examHour) + parseInt(this.assignLoad.examCasualHour)) !=  parseInt(this.currentUnitExamHourLeft)  ){
                    this.error = 'Invalid Exam Hours!'
                    return
                }


                try{
                   await AssignLoadService.post(this.assignLoad)
                    console.log(this.currentUserLoad)
                    console.log(this.newUserWorkLoad)
                    const newLoadObj = {
                        userid: this.currentUserID,
                        teachinghour: this.workloadToBeAdded
                    }
                    console.log(newLoadObj)
                    await AssignLoadService.teach(newLoadObj)

                    this.$router.push({
                        name: 'workload'
                    })
                }catch (err) {
                    console.log(err)
                }

            },
            async onChangeStaff() {
                console.log(this.staff)
                const b = this.currentUser = (await UserWorkLoadService.show(this.assignLoad.userID)).data
                var teachingHour
                var researchHour
                var serviceHour
                var anythingHour
                var accounttype
                var curruserid

                for(const key in b){
                    var value = b[key]
                    teachingHour = value.teachingHour
                    researchHour = value.researchHour
                    serviceHour = value.serviceHour
                    anythingHour = value.anythingHour
                    accounttype = value.accountType
                    curruserid = value.userID
                }

                this.currentUserID = curruserid;
                this.currentUserType = accounttype;
                this.currentUserLoad = parseInt(researchHour) + parseInt(teachingHour) + parseInt(serviceHour) + parseInt(anythingHour)
            },
            async onChangeUnit() {
                const c = this.currentUnitLoad = (await AssignLoadService.getUnit(this.assignLoad.unitID)).data
                var z;
                var x;
                var y;

                for (const key in c) {
                    var value = c[key]
                     z = value.unitTotalStudent;
                     x = value.assignmentRate;
                     y = value.examRate;
                }
                this.currentUnitAssignmentHourLeft = z * x;
                this.currentUnitExamHourLeft = z * y;
                if( z > 50 ){
                    this.currentUnitTutorialHourLeft = 60 + ( ( z - 50 ) * (1/6) )
                    this.currentUnitTutorialHourLeft = Math.round(this.currentUnitTutorialHourLeft)
                }else{
                    this.currentUnitTutorialHourLeft = 60;
                }



            }
        },
        computed: {
            currUnitTotalLoad: function() {
                const unittotal = ( parseInt(this.assignLoad.assignmentHour) + parseInt(this.assignLoad.assignmentCasualHour) ) + ( parseInt(this.assignLoad.examHour) + parseInt(this.assignLoad.examCasualHour) ) + ( parseInt(this.assignLoad.tutorialHour) + parseInt(this.assignLoad.tutorialCasualHour) ) + ( parseInt(this.assignLoad.supAssHour) + parseInt(this.assignLoad.supAssCasualHour) )

                if(isNaN(unittotal)){
                    return 0;
                }
                return unittotal
            },
        },
        components: {
            Panel
        }
    }
</script>

<style scoped>

</style>