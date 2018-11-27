<template>
<v-content>
  <v-container
    id="grid"
    fluid
    grid-list-sm
    tag="section"
  >
    <v-layout row wrap>
      <v-flex tag="h1" class="headline">Qualifications</v-flex>
      <v-flex d-flex xs12 order-xs5>
        <v-layout column>
          <v-flex>
            <v-card flat color="purple" dark>
              <v-card-text>{{ Name }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card flat>
              <v-card-text>{{ Age }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card flat color="purple" dark>
              <v-card-text>{{ Hours }}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
  </v-content>
</template>
<script>
  export default {
    data: () => ({
      Name: `Name`,
      Age: 'Age',
      Hours: 'No. of Hours'
    })
  }
</script>
