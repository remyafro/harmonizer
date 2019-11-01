<template>
    <v-app>
            <v-container
                class="fill-height align-start"
        >
            <v-flex xs6 class="mr-4">
                <Panel title="User Data">
                    <v-card>
                        <v-card-text>

                        </v-card-text>
                    </v-card>
                </Panel>
            </v-flex>
            <v-flex xs5>
                <Panel title="User Hours Data">
                    <v-card>


                    </v-card>
                </Panel>
            </v-flex>
        </v-container>
    </v-app>
</template>

<script>
   import UsersService from "@/services/UsersService";
   import Panel from '@/components/Panel'

    export default {
        data () {
            return {
                user: null,
            }
        },
        async mounted () {
           const userID = this.$store.state.route.params.userID
            const user = await UsersService.show(userID)
            console.log(user)
        },
        components: {
            Panel
        }
    }
</script>

<style scoped>

</style>