import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Qualifications from './components/Qualifications.vue';
import Calendar from './components/Calendar.vue';
import Setup from './components/Setup.vue';
import Register from './components/Register.vue';
import Settings from './components/Settings.vue';
import Connect from './components/Connect.vue';
import Landing from './components/Landing.vue';
import Maps from './components/Maps.vue';
/* import Dashboard from './components/Dashboard.vue'; */
import About from './components/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/qualifications',
      name: 'Qualifications',
      component: Qualifications
    },
    {
      path: '/landing',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/setup',
      name: 'setup',
      component: Setup
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/maps',
      name: 'maps',
      component: Maps
    }
  ]
});
