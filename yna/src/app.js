import Vue from 'vue'
import Vuetify from './plugins/vuetify'
import App from './App.vue'
import DaySpanVuetify from 'dayspan-vuetify'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Icon from 'vue-awesome/icons'
Vue.component('icon', Icon)

// Vue.use(Vuetify);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(DaySpanVuetify, {
  methods: {
    getDefaultEventColor: () => '#197cd2'
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
