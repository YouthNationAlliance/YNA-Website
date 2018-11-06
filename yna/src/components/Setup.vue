<template>
  <h1> Please fill in your info </h1>
  <v-form v-model="valid" align-center justify-center>
    <v-text-field
      v-model="name"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="school"
      label="School"
      required
    ></v-text-field>

    <v-text-field
      v-model="role"
      label="Role"
      required
    ></v-text-field>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      name: '',
      school: '',
      role: ''
    })
  }
</script>
