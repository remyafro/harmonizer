<template>
    <v-app id="inspire">
        <v-layout column>
            <v-flex xs6 offset-xs3>
                <Panel/>
            </v-flex>
        </v-layout>
    </v-app>
</template>

<script>
    import Panel from '@/components/Panel'
    export default{
        components: {
            Panel
        }
    }
</script>

<style>

</style>