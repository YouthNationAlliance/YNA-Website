/* We're copying the map from here: https://volunteers.ynalliance.ca/opportunities/
We have to create a search bar right under the maps */
<template>

  <span>
  <h1>Maps</h1>
  <h2>Volunteer Opportunities</h2>

  // Create the toolbar
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Sidebar</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn icon href="" target="_blank">
        <v-icon>window</v-icon>First button
      </v-btn>
      <v-btn icon href="" target="_blank">
        <v-icon>window</v-icon>Second button
      </v-btn>
      <v-btn icon href="" target="_blank">
        <v-icon>window</v-icon>Third button
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>

  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card height="500px">
        <v-card-title class="purple white--text">
          <span class="headline">Menu</span>
          <v-spacer></v-spacer>

          <v-menu bottom left>
            <v-btn
              slot="activator"
              dark
              icon
              >
              <v-icon>more_vert</v-icon>
            </v-btn>

            <v-list>
              <v-list-tile
                v-for="(item, i) in items"
                :key="i"
                @click=""
              >
              <v-list-tile-title>{{item.title}}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-card-title>
        <v-card-text>Maps</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  </span>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'My Profile'},
        { title: 'Login '},
        { title: 'Register '},
        { title: 'Calendar '},
        { title: 'Maps' }
      ]
    })
  }
</script>
