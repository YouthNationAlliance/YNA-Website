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
        href=""
      >
        <span class="mr-2">About</span>
      </v-btn>
      <v-btn
        flat
        href=""
      >
        <span class="mr-2">Events</span>
      </v-btn>

      <div class="text-xs-center">
        <v-menu offset-y>
        <v-btn
            slot="activator"
            flat
          >
            Volunteers
          </v-btn>
          <v-list>
            <v-list-tile
              v-for="(item, index) in items"
              :key="index"
              @click=""
            >
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>


      <!--
      <div class="text-xs-center">
        <v-menu offset-y>
        <v-btn
            slot="activator"
            flat
          >
            Profile
          </v-btn>
          <v-list>
            <v-list-tile
              v-for="(item, index) in items"
              :key="index"
              @click=""
            >
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>
      -->

      <div class="text-xs-center">
        <v-menu offset-y>
        <v-btn
            slot="activator"
            flat
          >
            Organizations
          </v-btn>
          <v-list>
            <v-list-tile
              v-for="(item, index) in items1"
              :key="index"
              @click=""
            >
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>

      <v-btn
        flat
        href=""
      >
        <span class="mr-2">Contact</span>
      </v-btn>

      <v-btn
        flat
        href=""
      >
        <span class="mr-2">Join Us</span>
      </v-btn>

      <v-btn
        flat
        href=""
      >
        <span class="mr-2">Login</span>
      </v-btn>


      <!--
      <v-btn
        flat
        href=""
      >
        <span class="mr-2">Maps</span>
      </v-btn>
      <v-btn
        flat
        href=""
      >
        <span class="mr-2">Calendar</span>
      </v-btn>
      -->
    </v-toolbar>

    <v-content>
      <template v-if="loggedIn">
      </template>
      <template v-else>
        <Landing v-if="landingPage === 'home'"/>
        <Login v-else-if="landingPage === 'login'"/>
        <Register v-else-if="landingPage === 'register'"/>
      </template>
      <!-- <Calendar/>
      <Connect/>
      <Setup/>
      <Dashboard/>
      <Qualifications/>
      <Maps/>
       -->
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
    Landing
  },
  data () {
    return {
      items: [
        { title: 'Before You Begin'},
        { title: 'Getting Started'},
        { title: 'Volunteer FAQs'}
      ],
      items1: [
        { title: 'Supporters and Partners'}
      ],
      /*
      items: [
      { title: 'Login'},
      { title: 'Register' },
      { title: 'Account Details'},
      { title: 'Account Settings'}
      ]
      */
      loggedIn: false,
      landingPage: "home"
    }
  },
  mounted: function() {
  }
}
</script>
