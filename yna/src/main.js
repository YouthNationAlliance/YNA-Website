import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import socketio from 'socket.io'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false

export const SocketInstance = socketio('http://localhost:5000');
Vue.use(VueSocketIO, SocketInstance)

new Vue({
  render: h => h(App)
}).$mount('#app')
