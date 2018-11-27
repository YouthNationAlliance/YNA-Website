import Vue from 'vue'
import Vuetify from './plugins/vuetify'
import App from './App.vue'
import DaySpanVuetify from 'dayspan-vuetify'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'

// Vue.use(Vuetify);

Vue.use(DaySpanVuetify, {
  methods: {
    getDefaultEventColor: () => '#197cd2'
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
