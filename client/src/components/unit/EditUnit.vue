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
                <Panel title="Edit Unit">
                    <v-card>
                        <v-card-text>
                            <v-text-field
                                    color="cyan"
                                    label="Unit ID"
                                    type="text"
                                    required
                                    :rules="[required]"
                                    v-model="unit.unitID"
                            >
                            </v-text-field>
                            <v-text-field
                                    color="cyan"
                                    label="Unit Code"
                                    type="text"
                                    required
                                    :rules="[required]"
                                    v-model="unit.unitCode"
                            >

                            </v-text-field>
                            <v-text-field
                                    color="cyan"
                                    label="Unit Name"
                                    required
                                    :rules="[required]"
                                    type="text"
                                    v-model="unit.unitName"
                            >

                            </v-text-field>
                            <v-text-field
                                    color="cyan"
                                    label="Unit Tutorial Size"
                                    required
                                    :rules="[required]"
                                    type="text"
                                    v-model="unit.unitTutorialSize"
                            >

                            </v-text-field>
                            <v-select
                                    color="cyan"
                                    label="Graduation Type"
                                    :items="gradtype"
                                    v-model="unit.gradType"
                            >

                            </v-select>
                            <v-select
                                    color="cyan"
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
                <Panel title="Edit Unit">
                    <v-card>
                        <v-card-text>
                            <v-select
                                    color="cyan"
                                    label="Location"
                                    :items="location"
                                    v-model="unit.unitLocation"
                            >

                            </v-select>
                            <v-text-field
                                    color="cyan"
                                    label="Unit Total Student"
                                    required
                                    :rules="[required]"
                                    type="text"
                                    v-model="unit.unitTotalStudent"
                            >

                            </v-text-field>
                            <v-select
                                    color="cyan"
                                    label="Unit Mode"
                                    :items="unitmode"
                                    v-model="unit.unitMode"
                            >

                            </v-select>

                            <v-select
                                    color="cyan"
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
                            <v-btn dark color="cyan" @click="save">Save Unit</v-btn>
                            <v-btn dark color="red" @click="deleteUnit">Delete</v-btn>
                        </v-card-actions>
                    </v-card>
                </Panel>
            </v-flex>
        </v-container>
    </v-app>
</template>

<script>
    import Panel from '@/components/Panel'
    import DisciplineService from "@/services/DisciplineService";
    import UnitService from "../../services/UnitService";
    export default {
        data() {
            return{
                unit: {
                    unitID : null,
                    unitCode: null,
                    unitName: null,
                    unitTutorialSize: null,
                    gradType: null,
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
                location: ['Dubai','Murdoch','OUA','kaplan'],
                period: ['S1','S2','S3','OUA 1','OUA 2', 'OUA 3', 'TMC']
            }

        },
        async mounted(){

            const unitID = this.$store.state.route.params.unitid
            this.unit = (await UnitService.show(unitID)).data
            console.log(this.unit);

            this.disciplines = (await DisciplineService.index()).data
            this.disciplineOptions = this.disciplines
        },
        methods: {
            async save() {
                try {
                    this.error = null;
                    const areAllFieldsFilledIn = Object
                        .keys(this.unit)
                        .every(key => !!this.unit[key])
                    if (!areAllFieldsFilledIn) {
                        this.error = 'Please fill in all the required fields.'
                        return
                    }
                    await UnitService.put(this.unit)
                    this.$router.push({
                        name: 'unit'
                    })
                } catch (err) {
                    console.log(err)
                }

            },
            async deleteUnit() {
                    await UnitService.delete(this.unit)
                    this.$router.push({
                        name: 'unit'
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