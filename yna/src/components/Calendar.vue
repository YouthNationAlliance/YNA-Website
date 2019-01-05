<template>
  <v-app id="dayspan" v-cloak>
    <h1>Calendar</h1>
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
