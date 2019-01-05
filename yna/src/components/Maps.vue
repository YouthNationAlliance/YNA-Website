/* Refer to the map from here: https://volunteers.ynalliance.ca/opportunities/
Create a search bar right under the maps */
<template>
  <div class="outer">
    <div class="middle">
      <div class="inner">
        <h1 style="font-size: 50px; color: purple;">Maps</h1>
        <p style="font-size: 20px;">Explore volunteer opportunities here.</p>
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
      </div>
    </div>
  </div>
</template>

<style>
.outer {
  display: table;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.middle {
  display: table-cell;
  vertical-align: middle;
}

.inner {
  margin-left: auto;
  margin-right: auto;
  width: 400px;
}
</style>


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
