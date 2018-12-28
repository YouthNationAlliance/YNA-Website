<template>
  <!-- <v-app> -->
    <v-toolbar app style="background-color: #4f2e86;">
      <v-toolbar-title>
        <v-btn flat @click="changePage('home')" class="headline text-uppercase" style="color: white;">
          <span>YNA</span>
          <span class="font-weight-light">lliance</span>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="home">
        <v-btn flat target="_blank" @click="changePage('home')" color="white">
          <span class="mr-2" style="font-weight: bold;">Home</span>
        </v-btn>
      </div>
      <div class="about">
        <v-btn flat @click="changePage('about')" color="white">
          <span class="mr-2" style="font-weight: bold;">About Us</span>
        </v-btn>
      </div>
      <div class="events">
        <v-btn flat @click="changePage('events')" color="white">
          <span class="mr-2" style="font-weight: bold;">Events</span>
        </v-btn>
      </div>

      <div class="text-xs-center" id="volunteers">
        <v-menu offset-y color="white">
        <v-btn slot="activator" flat @click="changePage('volunteers')" color="white" style="font-weight: bold;">
            Volunteers
        </v-btn>
          <v-list style="color: white; font-weight: bold; background-color: #4f2e86;">
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

      <div class="text-xs-center" id="organizations">
        <v-menu offset-y>
        <v-btn slot="activator" flat @click="changePage('organizations')" color="white" style="font-weight: bold;">
            Organizations
          </v-btn>
          <v-list style="color: white; font-weight: bold; background-color: #4f2e86;">
          <v-list-tile @click="changePage('supporters')">
            <v-list-tile-title>{{"Supporters and Partners"}}</v-list-tile-title>
          </v-list-tile>
          </v-list>
        </v-menu>
      </div>

      <div class="contact">
        <v-btn flat @click="changePage('contact')" color="white">
          <span class="mr-2" style="font-weight: bold;">Contact</span>
        </v-btn>
      </div>

      <div class="join-us">
        <v-btn flat @click="changePage('setup')" style="color: white; border: 2px solid white;">
          <span class="mr-2" style="font-weight: bold;">Join Us</span>
        </v-btn>
      </div>

      <div class="login">
        <v-btn flat @click="changePage('login')" style="color: #673AB7; height: 25px;">
          <span class="mr-2" style="font-weight: bold;">Login</span>
        </v-btn>
      </div>
    </v-toolbar>
  <!-- </v-app> -->
</template>

<style>
  .join-us {
    padding-right: 15px;
  }
  .login {
    background-color: white;
  }
</style>

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
