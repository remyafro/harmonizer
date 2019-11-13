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
                            <p>User Contact :{{ user.userContact }} </p>

                        </v-card-text>
                    </v-card>
                </Panel>
            </v-flex>
            <v-flex xs5>
                <Panel title="User Individual Data">
                    <v-card height="50%">
                        <v-card-text>
                            <UserPieChart
                            v-if="loaded"
                            :chartdata="chartdata"
                            ></UserPieChart>
                        </v-card-text>

                    </v-card>
                </Panel>
            </v-flex>
        </v-container>
        <v-container>
            <v-flex xs12>
                <Panel title="User Collective Data" class="justify-center">
                    <v-card height="50%">
                        <v-card-text>
                            <UserBarGraph
                            v-if="bargraphloaded"
                            :bargraphdata="bargraphdata"
                            ></UserBarGraph>
                        </v-card-text>
                    </v-card>
                </Panel>
            </v-flex>
        </v-container>

    </v-app>
</template>

<script>
   import UsersService from "../services/UsersService";
   import UserWorkLoadService from "../services/UserWorkLoadService";
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
                loaded: false,
                chartdata: null,
                bargraphloaded: null,
                bargraphdata: null,
                userWorkLoad: {
                    userLoadID: null,
                    teachingHour: null,
                    researchHour: null,
                    serviceHour: null,
                    anythingHour: null,
                    userID: null,
                    WorkLoadYear: null,
                },
                allWorkLoadData: null,
            }
        },
        async mounted () {
            this.loaded = false
            this.bargraphloaded = false
            const userID = this.$store.state.route.params.userid
            this.user = ( await UsersService.show(userID)).data

            try{
                this.userWorkLoad = ( await UserWorkLoadService.getpie(userID)).data
                this.chartdata = {
                    labels: ['Teaching Hour', 'Research Hour', 'Service Hour', 'Anything Hour'],
                    datasets: [
                        {
                            label: 'Data One',
                            backgroundColor: ['#79addc', '#ffc09f', '#ffee93', '#adf7b6'],
                            data: [this.userWorkLoad.teachingHour, this.userWorkLoad.researchHour, this.userWorkLoad.serviceHour, this.userWorkLoad.anythingHour ]
                        }
                    ]
                }
                this.loaded = true

            }catch (err){
                console.log(err)
            }

            this.allWorkLoadData = ( await UserWorkLoadService.index()).data
            console.log(this.allWorkLoadData)

            let names = this.allWorkLoadData.map(a => a.userName)
            let teaching = this.allWorkLoadData.map(a => a.teachingHour)
            let research = this.allWorkLoadData.map(a => a.researchHour)
            let service = this.allWorkLoadData.map(a => a.serviceHour)
            let anything = this.allWorkLoadData.map(a => a.anythingHour)



            this.bargraphdata = {
                    labels: names,
                    datasets: [
                        {
                            label: "Teaching Hour",
                            backgroundColor: "#79addc",
                            data: teaching
                        },
                        {
                            label: "Research Hour",
                            backgroundColor: "#ffc09f",
                            data: research
                        },
                        {
                            label: "Service Hour",
                            backgroundColor: "#ffee93",
                            data: service
                        },
                        {
                            label: "Anything Hour",
                            backgroundColor: "#adf7b6",
                            data: anything
                        },

                    ]
                }
                this.bargraphloaded = true
                console.log(this.bargraphdata)
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