<template>
  <h1> Please fill in your info</h1>
  <v-form v-model="valid" align-center justify-center>
    <v-text-field
      label="Name"
      required
    ></v-text-field>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      name: ''
    })
  }
</script>
