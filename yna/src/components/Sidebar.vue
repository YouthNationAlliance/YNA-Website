<template>
  <v-layout wrap>
    <v-navigation-drawer :mini-variant.sync="mini" v-model="drawer" clipped dark>
      <v-flex column class="text-xs-center" pa-3 xs4>
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile v-for="item in info" :key="item.Username"avatar>
            <v-list-tile-avatar color="white">
              <v-icon color="purple darken-4">face</v-icon>
              </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.Username"></v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini" color="white">
              <v-icon color="purple darken-4">chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <v-list-tile @click="changePage('settings')">
            <v-list-tile-action>
                <v-icon>contacts</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{"Account Details"}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="changePage('qualifications')">
            <v-list-tile-action>
              <v-icon>subtitles</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{"Qualifications"}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="changePage('maps')">
            <v-list-tile-action>
              <v-icon>map</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{"Maps"}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="changePage('calendar')">
            <v-list-tile-action>
              <v-icon>event</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{"Calendar"}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="changePage('chat')">
            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{"Chat"}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="logout">
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{"Logout"}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
import axios from 'axios'

  export default {
    data () {
      return {
        drawer: true,
        info: [
          {Username: 'Collin'}
        ],
        items: [
          { title: 'Account Details', icon: 'contacts' },
          { title: 'Qualifications', icon: 'subtitles' },
          { title: 'Map', icon: 'map' },
          { title: 'Calendar', icon: 'event' },
          { title: 'Chat', icon: 'chat' },
          { title: 'Logout', icon: 'exit_to_app'}
        ],
        mini: false,
        right: null
      }
    },
    mounted: function() {
    },
    methods: {
      changePage(page) {
        // alert(page);
        this.$emit('newPage', page);
        // this.$emit('rmsidebar', true);
      },
      logout() {
        var ref = this;
        axios.post('/logout', "logout").then(function(res) {
          console.log(res.data);

          if(res.data === 'success') {
            ref.$emit('login', false);
            ref.$emit('newPage', 'logout');
          }
        })
      }
    }
  }
</script>
