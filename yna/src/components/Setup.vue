<template>
  <v-container>
    <v-layout row wrap justify-center>
      <h1> Sign up to be a part of YNA! </h1>
    </v-layout>
    <br/>
    <br/>
    <v-layout row align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-form v-model="valid" align-center justify-center @submit.prevent="signup()">

          <v-layout row wrap>
            <v-flex column xs6>
              <v-text-field v-model="username" label="Username" required></v-text-field>
            </v-flex>
            <v-flex column xs6>
              <v-text-field id="password"
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
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex column xs6>
              <v-text-field id="first" v-model="first" label="First Name" required></v-text-field>
            </v-flex>
            <v-flex column xs6>
              <v-text-field id="last" v-model="last" label="Last Name" required></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex column xs 6>
              <v-text-field id="phone" v-model="number" :rules="phoneRules" label="Mobile Number" required></v-text-field>
            </v-flex>
            <v-flex column xs 6>
              <v-text-field id="bitrhday" v-model="birthday" label="Birth Date" required></v-text-field>
            </v-flex>
          </v-layout>

          <v-text-field id="email" v-model="email" :rules="emailRules" label="Email" required></v-text-field>
          <v-text-field id="school" v-model="school" label="Current School" required></v-text-field>

          <v-layout justify-center>
            <v-btn :disabled="!valid" @click="signup" class="purple white--text">Register!</v-btn>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>

</style>

<script>
  import axios from 'axios'

  export default {
    name: 'signup-form',
    data: () => ({
      valid: false,
      user:'',
      password:'',
      first: '',
      last: '',
      email: '',
      phone:'',
      birthday:'',
      school: '',
      errors: {
        user: false,
        password: false,
        first: false,
        last: false,
        email: false,
        phone: false,
        birthday: false,
        school: false
      },

      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+/.test(v) || 'Email must be valid'
      ],
      passRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Min 8 characters'
      ],
      phoneRules: [
        v => !!v || 'Phone number is required',
        v => /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(v) || 'Phone number must be valid'
      ]
    }),
    methods: {
      signup() {
        var ref = this;

        // console.log(user: this.user, email: this.email);
        alert('Processing!');
        axios.post('/signup', {
          email: document.getElementById('email').value,
          password: document.getElementById('password').value,
          first: document.getElementById('first').value,
          last: document.getElementById('last').value,
          phone: document.getElementById('phone').value,
          birthday: document.getElementById('birthday').value,
          school: document.getElementById('school').value
        }).then(function(res) {
          // console.log(res.data);
          if(res.data === 'success') {
            ref.$emit('login', true);
            alert('yeet');
            // console.log("yeet");
          } else {
            ref.$emit('login', false);
            alert('cust');
            // console.log("cust");
          }
        })
      },
      validateEmail() {
        const isValid = window.isValidEmail(this.email);
        // console.log(isValid);
        this.errors.email = !isValid;
      }
    }
  }
</script>
