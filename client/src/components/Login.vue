<template>
  <v-app id="inspire">
    <v-content>
      <v-container
              class="fill-height"
              fluid
      >
        <v-row
                align="center"
                justify="center"
        >
          <v-col
                  cols="12"
                  sm="8"
                  md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                      color="cyan"
                      dark
                      flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                          color="cyan"
                          label="Username"
                          name="username"
                          prepend-icon="person"
                          type="text"
                          v-model="username"
                  ></v-text-field>

                  <v-text-field
                          color="cyan"
                          id="password"
                          label="Password"
                          name="password"
                          prepend-icon="lock"
                          type="password"
                          v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark color="cyan" @click="login">Login</v-btn>
              </v-card-actions>
<!--              <div class="danger-alert" v-html="error" />-->
            </v-card>
          </v-col>
        </v-row>
        <v-alert
                v-if="error"
                dismissible
                type="error ">{{ error }}</v-alert>
      </v-container>

    </v-content>
  </v-app>
</template>

<script>
  import AuthenticationService from '../services/AuthenticationService';

  export default {
    data() {
      return {
        username: '',
        password: '',
        error: null,
      }
    },
    methods: {
      async login () {
        try{
            const response = await AuthenticationService.login({
              username: this.username,
              password: this.password
            })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          this.$store.dispatch('setPermission', response.data.usertype)
        }catch (error){
          this.error = error.response.data.error
        }
      }
    }
  }

</script>
<style>
  button{
    color: #fff;
  }
</style>