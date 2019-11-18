<template>
  <div id="app">
    <v-app>
      <v-content>
        <PageHeader/>
        <main>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </main>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
  },
  data: () => ({
    //
  }),
};
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 20px;
  }
  .v-toolbar__title{
    font-size: 24px;
  }
  .v-label{
    font-size: 20px;
  }
  *{
    font-size : 18px;
  }
  .v-data-table td{
    font-size: 18px !important;
  }
</style>
