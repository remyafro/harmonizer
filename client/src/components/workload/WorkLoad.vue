<template>
    <v-app>
        <v-content>
            <v-container
                    class="fill-height justify-center align-center"
                    fluid
            >
            <Panel title="Assigned Workload">
                <router-link
                        slot="action"
                        :to="{name: 'workload-create'}" >

                    <v-btn
                        class="dark accent"
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
                <download-csv
                        class="mt-3"
                        :data="a"
                        :name="dataFile"
                        :labels="labels"
                        :fields="fields"
                        v-on:export-finished="exported"
                >
                    <v-btn>Download</v-btn>
                </download-csv>

                <v-simple-table class="mt-5">
                    <thead>
                    <tr>
                        <th class="text-center">ID</th>
                        <th class="text-center">Unit Code</th>
                        <th class="text-center">Unit Name</th>
                        <th class="text-center">Unit Total Student</th>
                        <th class="text-center">Discipline Name</th>
                        <th class="text-center">Hours Assigned to staff</th>
                        <th class="text-center">Staff Name</th>
                        <th class="text-center">Hour Assigned To Casual</th>
                        <th class="text-center">Total Hours for this unit</th>





                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="dat in datas" :key="dat.assignLoadID">
                        <td>{{ dat.assignLoadID }}</td>
                        <td>{{ dat.unitCode }}</td>
                        <td>{{ dat.unitName }}</td>
                        <td>{{ dat.unitTotalStudent }}</td>
                        <td>{{ dat.disciplineName }}</td>
                        <td>{{ dat.supAssHour  + dat.tutorialHour + dat.examHour + dat.assignmentHour }}</td>
                        <td>{{ dat.userName }}</td>
                        <td>{{ dat.assignmentCasualHour + dat.examCasualHour + dat.tutorialCasualHour + dat.supAssCasualHour }}</td>
                        <td>{{ dat.assignmentCasualHour + dat.examCasualHour + dat.tutorialCasualHour + dat.supAssCasualHour + dat.supAssHour  + dat.tutorialHour + dat.examHour + dat.assignmentHour }}</td>





                        <td><v-btn
                            @click="navigateTo({
                            name: 'workload-edit',
                            params: {
                            assignloadid : dat.assignLoadID
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


            <v-row class="justify-space-around mr-auto ml-auto">
                <v-col>
                    <Panel title="Total Hours to Casual" class="justify-center">
                        <v-card>
                            <v-card-text class="headline">
                                {{  totalCasual }}
                            </v-card-text>
                        </v-card>
                    </Panel>
                </v-col>
                <v-col>
                    <Panel title="Total Cost Of Casual" class="justify-center">
                        <v-card>
                            <v-card-text class="headline">
                                ${{ totalCasual * 100 }}
                            </v-card-text>
                        </v-card>
                    </Panel>
                </v-col>
            </v-row>

    </v-app>
</template>

<script>
    import Panel from '@/components/Panel'
    import AssignLoadService from "@/services/AssignLoadService";
    import JsonCSV from 'vue-json-csv';

    export default{
        components: {
            Panel,
            'download-csv': JsonCSV
        },
        data() {
            return {
                datas : {
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
                sumOfCas: null,
                a: null,
                jsonData: [
                ],
                dataFile: 'my_export.csv',
                labels: {
                    assignLoadID: 'ID',
                    unitcode: 'Unit Code',
                    unitname: 'Unit Name',
                    unittotalstudent: 'Total Student',
                    disciplinename: 'Discipline Name',
                    supAsshour: 'Staff Supplementary Assessment Hour',
                    tutorialHour: 'Staff Tutorial Hour',
                    examHour: 'Staff Exam Hour',
                    assignmentHour: 'Staff Assignment Hour',
                    userName: 'User Name',
                    supAssCasualHour: 'Casual Supplementary Assessment Hour',
                    tutorialCasualHour: 'Casual Tutorial Hour',
                    examCasualHour: 'Casual Exam Hour',
                    assignmentCasualhour: 'Casual Assingment Hour'
                },
                fields : ['assignLoadID', 'unitcode', 'unitname', 'unittotalstudent','disciplinename','supAsshour', 'tutorialHour', 'examHour', 'assignmentHour', 'userName', 'supAssCasualHour', 'tutorialCasualHour', 'examCasualHour', 'assignmentCasualhour'],
                isExported: false
            }
        },
        methods: {
            navigateTo(route){
                this.$router.push(route)
            },
            exported(event) {
                console.log(event)
                this.isExported = true
                setTimeout(() => {
                    this.isExported = false
                }, 3 * 1000)
            }
        },
        computed: {
            totalCasual: function() {
                const b = this.sumOfCas;
                var sum;

                for(const key in b){
                    if(b.hasOwnProperty(key)){
                        var value = b[key]
                        sum = value.TOTAL;
                    }
                }
                return sum
            },
        },
        async mounted () {
            this.datas = (await AssignLoadService.index()).data
            this.sumOfCas = (await AssignLoadService.sumofcas()).data
            this.a = (await AssignLoadService.csv()).data


            console.log(this.a)


        }
    }
</script>

<style>
</style>