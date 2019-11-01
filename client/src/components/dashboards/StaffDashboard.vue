<template>
    <v-app>
        <v-content>
            <v-container
                    class="fill-height justify-center align-center"
                    fluid
            >
                <v-flex xs6>
                    <Panel title="Hello Staff">
                        <v-card>
                            <h2>Welcome {{ user }}</h2>
                        </v-card>
                    </Panel>
                </v-flex>
            </v-container>

        </v-content>
    </v-app>
</template>

<script>
    import Panel from "@/components/Panel";
    export default {
        data() {
            return{
                user : this.$store.state.user.userName
            }
        },
        components: {
            Panel
        }
    }
</script>

<style scoped>

</style>