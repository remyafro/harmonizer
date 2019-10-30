<template>
    <div className="white elevation-2">
        <v-toolbar flat dense className="cyan" dark>
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <slot name="action"/>
        </v-toolbar>

        <div className="pl-4 pr-4 pt-2 pb-2">
            <slot>
                No slot content defined.
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title : 'hello world'
            }
        }
    }
</script>

<style scoped>
</style>
