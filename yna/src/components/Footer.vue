<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      flat
      tile
      class="purple darken-4 white--text text-xs-center"
    >
      <v-card-text>
        <v-list-tile
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-list-tile-action>
            <v-icon>{{ icon.name }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-tile-title>{{ icon.link }}</v-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2018 — <strong>Youth Nation Alliance</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style>
  @url(https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
</style>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Home', key: 'home' },
        { title: 'About', key: 'about' },
        { title: 'Events', key: 'events' },
      ],
      items1: [
        { title: 'Volunteers', key: 'volunteers' },
        { title: 'Organizations', key: 'organizations' },
        { title: 'Contact', key: 'contact' }
      ],
      icons: [
        {
          name: 'email',
          link: 'teamyna@ynalliance.ca'
        },
        {
          name: 'phone',
          link: '416 846 9402'
        }
        /*
        { name:'home',
          link: '#'
        },
        { name: 'event',
          link: '#'
        },
        { name: 'info',
          link: '#'
        }
        */
      ]
    })
  }
</script>
