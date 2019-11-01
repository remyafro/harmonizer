<template>
    <v-app>
        <v-container
                class="fill-height align-center justify-center"
        >
            <v-flex xs6 class="mr-4">
                <v-alert
                        v-if="error"
                        dismissible
                        type="error">{{ error }}</v-alert>
                <Panel title="Edit Discipline">
                    <v-card>
                        <v-card-text>
                            <v-text-field
                                    color="cyan"
                                    label="Discipline Name"
                                    type="text"
                                    required
                                    :rules="[required]"
                                    v-model="discipline.disciplineName"
                            >

                            </v-text-field>
                            <v-text-field
                                    color="cyan"
                                    label="Assignment Rate"
                                    required
                                    :rules="[required]"
                                    type="text"
                                    v-model="discipline.assignmentRate"
                            >

                            </v-text-field>
                            <v-text-field
                                    color="cyan"
                                    label="Exam Rate"
                                    required
                                    :rules="[required]"
                                    type="text"
                                    v-model="discipline.examRate"
                            >

                            </v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn dark color="cyan" @click="save">Save</v-btn>
                            <v-btn dark color="red" @click="deleteDiscipline">Delete</v-btn>
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
    export default {
        data() {
            return{
                discipline: {
                    disciplineID: null,
                    disciplineName: null,
                    assignmentRate: null,
                    examRate: null

                },
                required: (value) => !!value || 'Required.',
                error: null
            }

        },
        async mounted(){

                const disciplineID = this.$store.state.route.params.disciplineid

                console.log(this.$store.state);
                this.discipline = (await DisciplineService.show(disciplineID)).data
        },
        methods: {
            async save() {
                try {
                    this.error = null;
                    const areAllFieldsFilledIn = Object
                        .keys(this.discipline)
                        .every(key => !!this.discipline[key])
                    if (!areAllFieldsFilledIn) {
                        this.error = 'Please fill in all the required fields.'
                        return
                    }
                    await DisciplineService.put(this.discipline)
                    this.$router.push({
                        name: 'discipline'
                    })
                } catch (err) {
                    console.log(err)
                }

            },
            async deleteDiscipline() {
                    await DisciplineService.delete(this.discipline)
                    this.$router.push({
                        name: 'discipline'
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