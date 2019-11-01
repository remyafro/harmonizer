<template>
    <v-app>
        <v-content>
            <v-container
                    class="fill-height justify-center align-center"
                    fluid
            >
            <Panel title="Disciplines">
                <router-link
                        slot="action"
                        :to="{name: 'discipline-create'}" >

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
                        <th class="text-center">Discipline ID</th>
                        <th class="text-center">Discipline Name</th>
                        <th class="text-center">Assignment Marking Rate</th>
                        <th class="text-center">Exam Marking Rate</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="discipline in disciplines" :key="discipline.disciplineID">
                        <td>{{ discipline.disciplineID }}</td>
                        <td>{{ discipline.disciplineName }}</td>
                        <td>{{ discipline.assignmentRate }}</td>
                        <td>{{ discipline.examRate }}</td>
                        <td><v-btn
                            @click="navigateTo({
                            name: 'discipline-edit',
                            params: {
                            disciplineid : discipline.disciplineID
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
    import DisciplineService from "@/services/DisciplineService";
    export default{
        components: {
            Panel
        },
        data() {
            return {
                disciplines : null
            }
        },
        methods: {
            navigateTo(route){
                this.$router.push(route)
            },

        },
        async mounted () {
            this.disciplines = (await DisciplineService.index()).data
        }
    }
</script>

<style>
</style>