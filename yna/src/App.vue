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
      <!--<Login/>-->
      <Setup/>
    </v-content>
    <Dashboard/>
  </v-app>
</template>

<script>
import Connect from './components/Connect'
import Login from './components/Login'
import Setup from './components/Setup'
import Calendar from './components/Calendar'
import Maps from './components/Maps'
import Dashboard from './components/Dashboard'
import Qualifications from './components/Qualifications'

export default {
  name: 'App',
  components: {
    Connect,
    Login,
    Setup,
    Calendar,
    Maps,
    Qualifications,
    Dashboard
  },
  data () {
    return {
      // Fill this stuff out later
    }
  },
  mounted: function() {
  //
  }
}
</script>
