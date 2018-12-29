<template>
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

      <v-list>
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
      </v-list>
  </v-navigation-drawer>
</template>

<script>
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
          { title: 'Chat', icon: 'chat' }
        ],
        mini: true,
        right: null
      }
    }
  }
</script>
