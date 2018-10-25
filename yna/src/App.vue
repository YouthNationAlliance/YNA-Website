<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>YNA</span>
        <span class="font-weight-light">lliance</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://www.ynalliance.ca/"
        target="_blank"
      >
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn
        flat
      >
        <span class="mr-2">Login</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Connect/>
      <Login/>
    </v-content>
  </v-app>
</template>

<script>
import Connect from './components/Connect'
import Login from './components/Login'

export default {
  name: 'App',
  components: {
    Connect,
    Login
  },
  data () {
    return {
      //
    }
  },
  mounted: function() {
    console.log('lol');
  }
}
</script>
