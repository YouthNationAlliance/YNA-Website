<template>
<div>
<h1>Qualifications</h1>
  <v-combobox
    v-model="chips"
    :items="items"
    label="Your favorite hobbies"
    chips
    clearable
    prepend-icon="filter_list"
    solo
    multiple
  >
    <template slot="selection" slot-scope="data">
      <v-chip
        color="purple darken-3"
        text-color="white"
        :selected="data.selected"
        close
        @input="remove(data.item)"
      >
      <v-avatar>
        <v-icon>check_circle</v-icon>
      </v-avatar>
        <strong>{{ data.item }}</strong>&nbsp;
      </v-chip>
    </template>
  </v-combobox>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        chips: ['Programming', 'Playing video games', 'Watching movies', 'Sleeping'],
        items: ['Streaming', 'Eating']
      }
    },

    methods: {
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      }
    }
  }
</script>
