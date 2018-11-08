import Vue from 'vue'
import Vuetify from './plugins/vuetify'
import App from './App.vue'
import DaySpanVuetify from 'dayspan-vuetify'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
