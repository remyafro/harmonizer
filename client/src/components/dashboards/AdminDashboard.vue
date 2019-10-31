<template>
    <v-app>
        <v-content>
            <v-container
                    class="fill-height justify-center align-center"
                    fluid
            >
                <v-flex xs6>
                    <Panel title="Welcome">
                        <v-card>
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
        components: {
            Panel
        }
    }
</script>

<style scoped>

</style>