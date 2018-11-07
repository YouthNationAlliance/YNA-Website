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
      <h1 v-if="loggedin">Logged in!</h1>
      <Login v-else/>
      <!--<Connect/>
      <Setup/>
      -->
      <v-btn color="success">Success</v-btn>
    </v-content>
  </v-app>
</template>

<script>
  import Connect from './components/Connect'
  import Login from './components/Login'
  import Setup from './components/Setup'
  import io from 'socket.io-client'

  export default {
    name: 'App',
    components: {
      //Connect,
      Login
      //Setup
    },
    data () {
      return {
        loggedin: false,
        isConnected: false,
        socketMessage: '',
      }
    },
    mounted: function() {
    },
    sockets: {
      connect() {
        // Fired when the socket connects.
        this.isConnected = true;
      },

      disconnect() {
        this.isConnected = false;
      }
    },
    methods: {
      login(){
        this.$socket.emit('pingServer', 'PING!')
      },
      logout(){
      },
      signup(){
      }
    },
    beforeMount() {
      this.login()
    }
  }
</script>
