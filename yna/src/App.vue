<template>
  <v-app>
    <v-content>
      <template v-if="loggedIn">
      </template>
      <template v-else>
        <Navbar @newPage="changePage"/>
        <Landing v-if="page === 'home'"/>
        <Login v-else-if="page === 'login'" @newPage="changePage"/>
        <Setup v-else-if="page === 'setup'"/>
      </template>
      <!-- <Calendar/>
      <Connect/>
      <Dashboard/>
      <Qualifications/>
      <Maps/>
       -->
    </v-content>
  </v-app>
</template>

<style>
  @import "https://fonts.googleapis.com/css?family=Raleway";
  .purpleBg{
    background-color: #4f2e86;
  }
  .purpleFg{
    color: #4f2e86;
  }
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
import Qualifications from './components/Qualifications'
import Landing from './components/Landing'
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Connect,
    Login,
    Setup,
    Calendar,
    Maps,
    Qualifications,
    Landing,
    Navbar
  },
  data () {
    return {
      loggedIn: false,
      page: "home"
    }
  },
  mounted: function() {
  },
  methods: {
    changePage(page){
      this.page = page;
    }
  }
}
</script>
