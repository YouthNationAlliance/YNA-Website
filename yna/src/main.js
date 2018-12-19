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

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAw3DA7G37Tk7FBcFiJpcSrNx8HS5Zmk4s",
  authDomain: "ynalliance-221903.firebaseapp.com",
  databaseURL: "https://ynalliance-221903.firebaseio.com",
  projectId: "ynalliance-221903",
  storageBucket: "ynalliance-221903.appspot.com",
  messagingSenderId: "237369762242"
};

fb.initializeApp(config);

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
