<template>
  <v-app id="dayspan" v-cloak>
    <h1 style="font-size: 50px; color: purple;">Calendar</h1>
    <p style="font-size: 30px;">Personalize your calendar.</p>
    <ds-calendar-app :calendar="calendar"></ds-calendar-app>
  </v-app>
</template>

<style>
body, html, #app, #dayspan {
  font-family: Roboto, sans-serif;
  width: 100%;
  height: 100%;
}
</style>

<script>
import { Calendar } from 'dayspan';

export default {
  name: 'app',
  data: () => ({
    calendar: Calendar.months()
  })
}
</script>
