<template>
  <v-app>
    <v-content>
      <template v-if="loggedIn">
        <Navbar @newPage="changePage"/>
        <Landing v-if="landingPage === 'home'"/>
        <Signout v-else-if="landingPage === 'signout'"/>
        <Maps v-else-if="landingPage === 'maps'"/>
        <Qualifications v-else-if="landingPage === 'qualifications'"/>
        <Setup v-else-if="landingPage === 'setup'"/>
        <Settings v-else-if="landingPage === 'settings'"/>
        <!-- <Connect/> -->
      </template>
      <template v-else>
        <Navbar @newPage="changePage"/>
        <Landing v-if="landingPage === 'home'"/>
        <Login v-else-if="landingPage === 'login'"/>
        <!-- <Register v-else-if="landingPage === 'register'"/> -->
        <Setup v-else-if="landingPage === 'setup'"/>
        <!-- <Connect/> -->
      </template>
    </v-content>
  </v-app>
</template>

<style>
  @import "https://fonts.googleapis.com/css?family=Raleway";
  h1{
    font-family: 'Raleway', sans-serif;
    font-size: 36pt;
  }
  h2{
    font-family: 'Raleway', sans-serif;
    font-size: 30pt;
  }
  h3{
    font-family: 'Raleway', sans-serif;
    font-size: 24pt;
  }
  p{
    font-family: 'Raleway', sans-serif;
    font-size: 16pt;
  }
</style>

<script>
import Connect from './components/Connect'
import Login from './components/Login'
import Setup from './components/Setup'
import Calendar from './components/Calendar'
import Maps from './components/Maps'
import Register from './components/Register'
import Qualifications from './components/Qualifications'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Settings from './components/Settings'
import About from './components/About'
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Connect,
    Login,
    Setup,
    Calendar,
    Maps,
    Register,
    Qualifications,
    Landing,
    Navbar,
    About,
    Home,
    Settings
  },
  data () {
    return {
      loggedIn: false,
      landingPage: "register"
    }
  },
  mounted: function() {
  },
  methods: {
    changePage(page) {
      this.landingPage = page;
    }
  }
}
</script>
