<template>
                        <v-card class="elevation-12">
                            <v-toolbar
                                    color="dark"
                                    dark
                                    flat
                            >
                                <v-toolbar-title>{{ title }}</v-toolbar-title>
                                <slot name="action"></slot>
                            </v-toolbar>
                          <slot>
                              No slot defined
                          </slot>
                        </v-card>
</template>

<script>
    export default {
        props: [
            'title'
        ]
    }
</script>

<style scoped>
    .main_container{
        width: 80%;
        margin: 0 auto;
    }
</style>
