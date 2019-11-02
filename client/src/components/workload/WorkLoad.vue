<template>
    <v-app>
        <v-content>
            <v-container
                    class="fill-height justify-center align-center"
                    fluid
            >
            <Panel title="Units">
                <router-link
                        slot="action"
                        :to="{name: 'unit-create'}" >

                    <v-btn
                        class="cyan accent"
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
                        <th class="text-center">Unit ID</th>
                        <th class="text-center">Unit Code</th>
                        <th class="text-center">Unit Name</th>
                        <th class="text-center">Unit Tutorial Size</th>
                        <th class="text-center">Grad Type</th>
                        <th class="text-center">Unit Period</th>
                        <th class="text-center">Unit Location</th>
                        <th class="text-center">Unit Total Student</th>
                        <th class="text-center">Unit Mode</th>
                        <th class="text-center">Discipline</th>


                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="unit in units" :key="unit.unitID">
                        <td>{{ unit.unitID }}</td>
                        <td>{{ unit.unitCode }}</td>
                        <td>{{ unit.unitName }}</td>
                        <td>{{ unit.unitTutorialSize }}</td>
                        <td>{{ unit.gradType }}</td>
                        <td>{{ unit.unitPeriod }}</td>
                        <td>{{ unit.unitLocation }}</td>
                        <td>{{ unit.unitTotalStudent }}</td>
                        <td>{{ unit.unitMode }}</td>
                        <td>{{ unit.disciplineName }}</td>





                        <td><v-btn
                            @click="navigateTo({
                            name: 'unit-edit',
                            params: {
                            unitid : unit.unitID
                            }
                            })"
                        >
                            Assign</v-btn></td>
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
                            <v-card-text>
                                <UserBarGraph></UserBarGraph>
                            </v-card-text>
                        </v-card>
                    </Panel>
                </v-col>
                <v-col>
                    <Panel title="Total Cost Of Casual" class="justify-center">
                        <v-card>
                            <v-card-text>
                                <UserBarGraph></UserBarGraph>
                            </v-card-text>
                        </v-card>
                    </Panel>
                </v-col>
            </v-row>

    </v-app>
</template>

<script>
    import Panel from '@/components/Panel'
    import UnitService from '@/services/UnitService'
    export default{
        components: {
            Panel
        },
        data() {
            return {
                units : null
            }
        },
        methods: {
            navigateTo(route){
                this.$router.push(route)
            },

        },
        async mounted () {
            this.units = (await UnitService.index()).data
        }
    }
</script>

<style>
</style>