<template>
    <div id="login" class="back">
        <alert v-bind:alert="alert"></alert>
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-card class="elevation-4 card">
                        <v-toolbar flat color="white">
                            <v-spacer/>
                            <v-toolbar-title>Login</v-toolbar-title>
                            <v-spacer/>
                        </v-toolbar>
                        <v-card-text>
                            <v-form
                                    v-model="valid"
                                    ref="form"
                                    lazy-validation>
                                <v-text-field v-model="userId" label="EmailId" type="text"/>
                                <v-text-field v-model="password" label="Password" type="password"/>

                                <div>
                                    <v-btn
                                            flat="true"
                                            :align="right"
                                            :disabled="!valid"
                                            color="primary"
                                            :loading="loading"
                                            @click="submit">
                                        Login
                                    </v-btn>
                                    <router-link style="color: #223958; margin-right: 20px" to="register">
                                        Not Have An Account ?
                                    </router-link>
                                </div>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
    import Alert from './Alert.vue'

    export default {
        name: 'login',
        components: {
            'alert': Alert
        },
        data: () => ({
            alert: {
                title: 'Logging You In',
                dialog: false,
                positive: 'OK',
                negative: 'Cancel',
                p: false,
                n: false
            },

            userId: '',
            password: '',
            valid: false,
            idRules: [
                v => !!v || 'EmailId is Required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)
                    || 'E-mail must be valid'
            ]
        }),
        methods: {
            submit() {
                this.dialog = true
                if (this.$refs.form.validate()) {
                    this.$auth.logIn(this.emailId, this.password).then(
                        user => {
                            this.alert.dialog = true
                            this.alert.title = 'Signed In As ' + user.displayName + ' .'
                            this.alert.p = true
                            this.$router.push('/')
                        }).catch(
                        error => {
                            this.alert.dialog = false
                        })
                }
            }
        },
        props: {
            source: String
        }
    }
</script>

<style scoped>

    .back{
        background-color: palegreen;
    }
    .button {
        display: block;
    }

    .card {
        padding: 20px;
        min-width: 500px;
        max-width: 800px;
    }
</style>
