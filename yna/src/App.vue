<template>
  <v-app>
    <v-content>
      <template v-if="loggedIn">
        <Sidebar @newPage="changePage"/>
        <Landing v-if="page === 'home'"/>
        <Settings v-else-if="page === 'settings'"/>
        <Qualifications v-else-if="page === 'qualifications'"/>
        <Maps v-else-if="page === 'maps'"/>
        <Calendar v-else-if="page === 'calendar'"/>
        <Chat v-else-if="page === 'chat'"/>
        <!-- <Connect/> -->
      </template>
      <template v-else>
        <Navbar @newPage="changePage"/>
        <Landing v-if="page === 'home'"/>
        <Login v-else-if="page === 'login'" @login="updateStatus" @newPage="changePage"/>
        <Setup v-else-if="page === 'setup'" @login="updateStatus"/>
        <About v-else-if="page === 'about'"/>
      </template>
      <Footer/>
      <!-- <Connect/> -->
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
  .darkpurpleBg {
    background-color: #4f2e86;
    /* opacity: 0.1; */
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
import Settings from './components/Settings'
import About from './components/About'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import Logout from './components/Logout'

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
    Navbar,
    About,
    Home,
    Settings,
    Sidebar,
    Chat,
    Logout
  },
  data () {
    return {
      loggedIn: true,
      page: "home"
    }
  },
  mounted: function() {
  },
  methods: {
    changePage(page) {
      this.page = page;
      alert(page);
    },
    updateStatus(status) {
      this.loggedIn = status;
      // console.log(status);
    }
  }
}
</script>
