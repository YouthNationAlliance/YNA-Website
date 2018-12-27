<template>
<div>
<h1>Qualifications</h1>
  <v-combobox
    v-model="qualifications"
    label="Enter Your Qualifications Here"
    chips
    clearable
    prepend-icon="filter_list"
    solo
    multiple
  >
    <template slot="selection" slot-scope="data">
      <v-chip
        color="purple darken-4"
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
    data: () => ({
        qualifications: ["playing video games", "yeeting"],
    }),

    methods: {
      remove (item) {
        this.qualifications.splice(this.qualifications.indexOf(item), 1)
        this.qualifications = [...this.qualifications]
      }
    }
  }
</script>
