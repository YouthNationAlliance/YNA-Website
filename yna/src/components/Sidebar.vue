<template>
  <v-layout wrap fill-height>
    <v-navigation-drawer :mini-variant.sync="mini" v-model="drawer" clipped dark>
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
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click="changePage(item.key)"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
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
  </v-navigation-drawer>

    <v-snackbar
      v-model="snackbar"
      :bottom=true
      :left=false
      :multi-line=false
      :right=true
      :timeout="12000"
      :top=false
      :vertical="mode === 'vertical'"
    >
      Click on the sidebar to get started.
    <v-btn
      color="purple"
      flat
      @click="snackbar = false"
    >
      Close
    </v-btn>
  </v-snackbar>
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
          { title: 'Account Details', icon: 'contacts', key: 'settings' },
          { title: 'Qualifications', icon: 'subtitles', key: 'qualifications' },
          { title: 'Map', icon: 'map', key: 'maps' },
          { title: 'Calendar', icon: 'event', key: 'calendar' },
          { title: 'Chat', icon: 'chat', key: 'chat' }// ,
          // { title: 'Logout', icon: 'exit_to_app', key: 'logout'}
        ],
        mini: true,
        right: null,
        snackbar: true,
      }
    },
    mounted: function() {
    },
    methods: {
      changePage(page) {
        // alert(page);
        this.$emit('newPage', page);
      },
      logout() {
        var ref = this;
        axios.post('/logout', "logout").then(function(res) {
        console.log(res.data);
        if (res.data === 'success') {
          ref.$emit('login', false);
          ref.$emit('newPage', 'logout');
        }
      })
    }
  }
}
</script>
