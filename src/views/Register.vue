<template>
  <div id="register">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-card class="elevation-4 card">
            <v-toolbar flat color="white">
              <v-spacer/>
              <v-toolbar-title>Register</v-toolbar-title>
              <v-spacer/>
            </v-toolbar>
            <v-card-text>
              <v-form
                v-model="valid"
                ref="form"
                lazy-validation>
                <v-text-field v-model="name" name="name" label="Name" type="text"
                              :rules="[v => !!v || 'Name is Required']"/>
                <v-text-field v-model="phoneNo" name="phoneNo" label="Phone No" type="phone"
                              :rules="[v => !!v || 'Phone No is Required']"/>
                <v-text-field v-model="emailId" name="emailId" label="EmailId" type="text"/>
                <v-text-field v-model="password" name="password" label="Password" type="password"/>
                <v-btn flat="true"
                        :disabled="!valid"
                       color="primary"
                       :loading="loading"
                       @click="submit">
                  Register
                </v-btn>
                <router-link style="color: #223958; margin-right: 20px" to="login">
                  Already Have An Account ?
                </router-link>
              </v-form>
            </v-card-text>
          </v-card>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data: () => ({
      phoneNo: '',
      emailId: '',
      name: '',
      password: '',
      valid: false,
      loading: false,
      emailIdRules: [
        v => !!v || 'EmailId is Required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)
          || 'E-mail must be valid'
      ]
    }),
    methods: {
      submit() {
        this.loading = true
        if (this.$refs.form.validate()) {
        }
        /*Alert.create({html:this.emailId})
        this.$auth.logIn(this.emailId, this.password).then(
          user => {
            this.loading = false
            Alert.create({html: 'Signed In As ' + user.displayName + ' .', color: 'positive'})
            this.$router.push('/homepage')
          }).catch(
          error => {
            this.loading = false
            Alert.create({html: error.toString(), color: 'negative'})
          })*/
      }
    },
    props: {
      source: String
    }
  }
</script>

<style scoped>
  .card {
    min-width: 500px;
    max-width: 800px;
  }
</style>
