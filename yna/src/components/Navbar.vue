<template>
  <!-- <v-app> -->
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>YNA</span>
        <span class="font-weight-light">lliance</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat target="_blank" @click="changePage('home')">
        <span class="mr-2" >Home</span>
      </v-btn>
      <v-btn flat href="">
        <span class="mr-2">About</span>
      </v-btn>
      <v-btn flat href="">
        <span class="mr-2">Events</span>
      </v-btn>

      <div class="text-xs-center">
        <v-menu offset-y>
        <v-btn slot="activator" flat>
            Volunteers
          </v-btn>
          <v-list>
            <v-list-tile v-for="(item, index) in items" :key="index" @click="">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>

      <div class="text-xs-center">
        <v-menu offset-y>
        <v-btn slot="activator" flat>
            Organizations
          </v-btn>
          <v-list>
            <v-list-tile v-for="(item, index) in items1" :key="index" @click="">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>

      <v-btn flat href="">
        <span class="mr-2">Contact</span>
      </v-btn>

      <v-btn flat href="">
        <span class="mr-2">Join Us</span>
      </v-btn>

      <v-btn flat @click="changePage('login')">
        <span class="mr-2">Login</span>
      </v-btn>

    </v-toolbar>
  <!-- </v-app> -->
</template>

<script>
  export default {
    data () {
      return {
        items: [
        { title: 'Before You Begin'},
        { title: 'Getting Started'},
        { title: 'Volunteer FAQs'}
        ],
        items1: [
        { title: 'Supporters and Partners'}
        ]
      }
    },
    mounted: function() {
    },
    methods: {
      changePage: function(page){
        this.$emit('newPage', page);
      }
    }
  }
</script>
