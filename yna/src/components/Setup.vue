<template>
  <v-flex xs12 sm8 md4>
    <h1> Please fill in your info </h1>
    <v-form v-model="valid" align-center justify-center>
      <v-text-field v-model="first" label="First Name" required></v-text-field>
      <v-text-field v-model="last" label="Last Name" required></v-text-field>
      <v-text-field v-model="last" label="Username" required></v-text-field>
      <v-text-field v-model="last" label="Email Addres" required></v-text-field>
      <v-text-field v-model="last" label="Mobile Number" required></v-text-field>
      <v-text-field v-model="last" label="Birth Date" required></v-text-field>

      <v-text-field v-model="school" label="Current School" required></v-text-field>
      <v-btn
        :disabled="!valid"
        @click="submit"
      >
    </v-form>
  </v-flex>
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
