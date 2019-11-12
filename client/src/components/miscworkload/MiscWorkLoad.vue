<template>
    <v-app>
        <v-content>
            <v-container
                    class="fill-height justify-center align-center"
                    fluid
            >
            <Panel title="Workload Overview">
                <v-simple-table class="mt-5">
                    <thead>
                    <tr>
                        <th class="text-center">ID</th>
                        <th class="text-center">Work Load Year</th>
                        <th class="text-center">Account Type</th>
                        <th class="text-center">Staff Name</th>
                        <th class="text-center">Teaching Hour</th>
                        <th class="text-center">Research Hour</th>
                        <th class="text-center">Service Hour</th>
                        <th class="text-center">Anything Hour</th>
                        <th class="text-center">Total Hours</th>







                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="dat in datas" :key="dat.userLoadID">
                        <td>{{ dat.userLoadID }}</td>
                        <td>{{ dat.WorkLoadYear }}</td>
                        <td>{{ dat.accountType }}</td>
                        <td>{{ dat.userName }}</td>
                        <td>{{ dat.teachingHour }}</td>
                        <td>{{ dat.researchHour }}</td>
                        <td>{{ dat.serviceHour }}</td>
                        <td>{{ dat.anythingHour }}</td>
                        <td>{{ parseInt(dat.teachingHour) + parseInt(dat.researchHour) + parseInt(dat.serviceHour) + parseInt(dat.anythingHour) }}</td>





                        <td><v-btn
                            @click="navigateTo({
                            name: 'miscworkload-edit',
                            params: {
                            userloadid : dat.userLoadID,
                            userid: dat.userID
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
    import UserWorkLoadService from "../../services/UserWorkLoadService";
    export default{
        components: {
            Panel
        },
        data() {
            return {
                userWorkLoad : {
                    userLoadID : null,
                    teachingHour: null,
                    researchHour: null,
                    serviceHour: null,
                    anythingHour: null,
                    userID: null,
                    workLoadYear: null,
                },
                datas: null,
            }
        },
        methods: {
            navigateTo(route){
                this.$router.push(route)
            },
        },
        async mounted () {
            this.datas = (await UserWorkLoadService.index()).data

        }
    }
</script>

<style>
</style>