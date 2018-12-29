/* We're copying the map from here: https://volunteers.ynalliance.ca/opportunities/
We have to create a search bar right under the maps */
<template>

  <span style="text-align: center;">
  <h1>Maps</h1>
  <h3>Volunteer Opportunities</h3>

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
        <v-card-text>1st Event</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  </span>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: '1st Event'},
        { title: '2nd Event'},
        { title: '3rd Event'},
        { title: '4th Event'},
        { title: '5th Event' }
      ]
    })
  }
</script>
