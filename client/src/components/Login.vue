<template>
  <v-app>
    <v-content>
      <v-container
              class="fill-height justify-center align-center"
              fluid
      >
        <v-flex xs6>
          <v-alert
                  v-if="error"
                  dismissible
                  type="error ">{{ error }}</v-alert>
          <Panel title="login">
            <v-card>
              <v-card-text>
                <v-form>
                  <v-text-field
                          color="dark"
                          label="Username"
                          name="username"
                          prepend-icon="person"
                          type="text"
                          v-model="username"
                  ></v-text-field>

                  <v-text-field
                          color="dark"
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
                <v-btn dark color="dark" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </Panel>
        </v-flex>
      </v-container>

    </v-content>
  </v-app>
</template>

<script>
  import AuthenticationService from '../services/AuthenticationService';
  import Panel from '@/components/Panel';

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
        try {
          const response = await AuthenticationService.login({
            username: this.username,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          this.$store.dispatch('setPermission', response.data.usertype)
          this.$store.dispatch('setDiscipline', response.data.disciplineid)
        } catch (error) {
          this.error = error.response.data.error
        }
        const currentUserPermission = this.$store.state.permission
        if (currentUserPermission === 'admin') {
          this.$router.push({
            name: 'admin-dashboard'
          })
        } else if (currentUserPermission === 'hod'){
          this.$router.push({
            name: 'hod-dashboard'
          })
        }else if (currentUserPermission === 'staff-FT'){
          this.$router.push({
            name: 'staff-dashboard'
          })
        }
        else if (currentUserPermission === 'staff-PT'){
          this.$router.push({
            name: 'staff-dashboard'
          })
        }
      }
    },
    components: {
      Panel
    }
  }

</script>
<style>
  button{
    color: #fff;
  }
</style>