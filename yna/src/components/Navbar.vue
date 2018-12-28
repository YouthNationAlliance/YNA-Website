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
      <v-btn flat @click="changePage('about')">
        <span class="mr-2">About Us</span>
      </v-btn>
      <v-btn flat @click="changePage('events')">
        <span class="mr-2">Events</span>
      </v-btn>

      <div class="text-xs-center">
        <v-menu offset-y>
        <v-btn slot="activator" flat @click="changePage('volunteers')">
            Volunteers
        </v-btn>
          <v-list>
            <v-list-tile @click="changePage('before_you_begin')">
              <v-list-tile-title>{{"Before You Begin"}}</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="changePage('getting_started')">
              <v-list-tile-title>{{"Getting Started"}}</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="changePage('volunteer_faqs')">
              <v-list-tile-title>{{"Volunteer FAQs"}}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>

      <div class="text-xs-center">
        <v-menu offset-y>
        <v-btn slot="activator" flat @click="changePage('organizations')">
            Organizations
          </v-btn>
          <v-list>
          <v-list-tile @click="changePage('supporters')">
            <v-list-tile-title>{{"Supporters and Partners"}}</v-list-tile-title>
          </v-list-tile>
          </v-list>
        </v-menu>
      </div>

      <v-btn flat @click="changePage('contact')">
        <span class="mr-2">Contact</span>
      </v-btn>

      <v-btn flat @click="changePage('setup')">
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
        ],
      }
    },
    mounted: function() {
    },
    methods: {
      changePage: function(page) {
        this.$emit('newPage', page);
      }
    }
  }
</script>
