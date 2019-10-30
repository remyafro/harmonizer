<template>
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
