<template>
  <v-navigation-drawer
    :mini-variant.sync="mini"
    v-model="drawer"
    clipped
    dark
  >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile
        v-for="item in info"
        :key="item.Username"
        avatar>
          <v-list-tile-avatar
          color="white"
          >
            <v-icon color="purple darken-4">face</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-text="item.Username"></v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini"
              color="white"
            >
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
        @click=""
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
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
