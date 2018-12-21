<template>
  <v-flex xs12 sm8 md4>
    <h1> Please fill in your info </h1>
    <v-form v-model="valid" align-center justify-center>
      <v-text-field v-model="firstname" label="First Name" required></v-text-field>
      <v-text-field v-model="lastname" label="Last Name" required></v-text-field>
      <v-text-field v-model="username" label="Username" required></v-text-field>
      <v-text-field v-model="email" label="Email Address" required></v-text-field>
      <v-text-field v-model="mobile" label="Mobile Number" required></v-text-field>
      <v-text-field v-model="birthday" label="Birth Date" required></v-text-field>
      <v-text-field v-model="school" label="Current School" required></v-text-field>
      <v-text-field v-model="role" label="Role" required></v-text-field>
      <v-btn
        :disabled="!valid"
        @click="submit"
      />
    </v-form>
  </v-flex>
</template>

<style>

</style>

<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      mobile: '',
      school: '',
      birthday: '',
      role: ''
    })
  }
</script>
