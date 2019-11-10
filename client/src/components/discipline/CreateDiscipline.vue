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
                    <Panel title="Create Discipline">
                        <v-card>
                            <v-card-text>
                                <v-text-field
                                        color="dark"
                                        label="Discipline ID"
                                        type="text"
                                        required
                                        :rules="[required]"
                                        v-model="discipline.disciplineID"
                                >
                                </v-text-field>
                                <v-text-field
                                        color="dark"
                                        label="Discipline Name"
                                        type="text"
                                        required
                                        :rules="[required]"
                                        v-model="discipline.disciplineName"
                                >

                                </v-text-field>
                                <v-text-field
                                        color="dark"
                                        label="Assignment Rate"
                                        required
                                        :rules="[required]"
                                        type="text"
                                        v-model="discipline.assignmentRate"
                                >

                                </v-text-field>
                                <v-text-field
                                        color="dark"
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
                                <v-btn dark color="dark" @click="create">Create Discipline</v-btn>
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
        methods: {
            async create() {
                this.error = null;
                const areAllFieldsFilledIn = Object
                    .keys(this.discipline)
                    .every(key => !!this.discipline[key])
                if (!areAllFieldsFilledIn) {
                    console.log(this.user);
                    this.error = 'Please fill in all the required fields.'
                    return
                }

                try{
                   await DisciplineService.post(this.discipline)
                       this.$router.push({
                           name: 'discipline'
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