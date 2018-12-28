import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import DaySpanVuetify from 'dayspan-vuetify'
import router from './router'
/* import { store } from './store.js/' */
// Need this to use Firebase
const fb = require('./firebaseConfig.js')

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'
import Icon from 'vue-awesome/icons'
Vue.component('icon', Icon)


Vue.use(Vuetify);

Vue.use(DaySpanVuetify, {
  methods: {
    getDefaultEventColor: () => '#197cd2'
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
