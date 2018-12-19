<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <h1>Don't have an account? Join us here.</h1>
        <v-form v-model="valid" align-center justify-center>
          <v-text-field
            id="email"
            v-model="email"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>
          <v-text-field
            id="password"
            v-model="password"
            :append-icon="show1 ? 'visibility_off' : 'visibility'"
            :rules="passRules"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-btn @click="login">Login</v-btn>
          <v-btn @click="toSignup">Signup</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

  export default {
    data: () => ({
      valid: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+/.test(v) || 'Email must be valid'
      ],
      passRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Min 8 characters'
      ]
    }),

    methods: {
      login () {
        axios.post('/login', {
          email: document.getElementById('email').value,
          password: document.getElementById('password').value
        })
      },
      toSignup(){
        this.$emit('newPage', "setup");
      }
    }
  }
</script>
