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
                    <Panel title="Unit Metadata">
                        <v-card>
                            <v-card-text>
                                <v-text-field
                                        color="dark"
                                        label="Unit ID"
                                        type="text"
                                        required
                                        :rules="[required]"
                                        v-model="unit.unitID"
                                >
                                </v-text-field>
                                <v-text-field
                                        color="dark"
                                        label="Unit Code"
                                        type="text"
                                        required
                                        :rules="[required]"
                                        v-model="unit.unitCode"
                                >

                                </v-text-field>
                                <v-text-field
                                        color="dark"
                                        label="Unit Name"
                                        required
                                        :rules="[required]"
                                        type="text"
                                        v-model="unit.unitName"
                                >

                                </v-text-field>
                                <v-text-field
                                        color="dark"
                                        label="Unit Tutorial Size"
                                        required
                                        :rules="[required]"
                                        type="text"
                                        v-model="unit.unitTutorialSize"
                                >

                                </v-text-field>
                                <v-text-field
                                        color="dark"
                                        label="Unit Year"
                                        required
                                        :rules="[required]"
                                        type="text"
                                        v-model="unit.unitYear"
                                >

                                </v-text-field>
                                <v-select
                                        color="dark"
                                        label="Graduation Type"
                                        :items="gradtype"
                                        v-model="unit.gradType"
                                >

                                </v-select>
                                <v-select
                                        color="dark"
                                        label="Unit Period"
                                        :items="period"
                                        v-model="unit.unitPeriod"
                                >

                                </v-select>
                            </v-card-text>
                        </v-card>
                    </Panel>
                </v-flex>
                <v-flex xs5>
                    <Panel title="Unit Metadata">
                        <v-card>
                            <v-card-text>
                                <v-select
                                        color="dark"
                                        label="Location"
                                        :items="location"
                                        v-model="unit.unitLocation"
                                >

                                </v-select>
                                <v-text-field
                                        color="dark"
                                        label="Unit Total Student"
                                        required
                                        :rules="[required]"
                                        type="text"
                                        v-model="unit.unitTotalStudent"
                                >

                                </v-text-field>
                                <v-select
                                        color="dark"
                                        label="Unit Mode"
                                        :items="unitmode"
                                        v-model="unit.unitMode"
                                >

                                </v-select>

                                <v-select
                                        color="dark"
                                        label="Discipline"
                                        :items="disciplineOptions"
                                        single-line
                                        item-text="disciplineName"
                                        item-value="disciplineID"
                                        v-model="unit.disciplineID"
                                >

                                </v-select>

                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn dark color="dark" @click="create">Create Unit</v-btn>
                            </v-card-actions>
                        </v-card>
                    </Panel>
                </v-flex>
            </v-container>
    </v-app>
</template>

<script>
    import Panel from '@/components/Panel'
    import UnitService from "@/services/UnitService";
    import DisciplineService from "@/services/DisciplineService";
    export default {
        data() {
            return{
                unit: {
                    unitID : Math.floor(Math.random() * 10001) + 1,
                    unitCode: null,
                    unitName: null,
                    unitTutorialSize: null,
                    gradType: null,
                    unitYear: null,
                    unitPeriod: null,
                    unitLocation: null,
                    unitTotalStudent: null,
                    unitMode: null,
                    disciplineID: null,

                },
                disciplineOptions: [],
                disciplines: null,
                required: (value) => !!value || 'Required.',
                error: null,
                gradtype: ['Postgraduate','Undergraduate'],
                unitmode: ['D','X'],
                location: ['Dubai','Murdoch','OUA','Kaplan'],
                period: ['S1','S2','S3','OUA 1','OUA 2', 'OUA 3', 'TMC', 'TJA', 'TMA', 'TSA']
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

            }
        },
        components: {
            Panel
        }
    }
</script>

<style scoped>

</style>