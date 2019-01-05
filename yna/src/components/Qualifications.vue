<template>
  <div class="outer">
    <div class="middle">
      <div class="inner">
        <h1 style="font-size: 50px; color: purple;">Qualifications</h1>
        <p style="font-size: 20px;">Edit and view your qualifications here.</p>
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
