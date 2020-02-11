require('./bootstrap');

import Vue from 'vue';
import vuex from 'vuex';
import router from './router';

import App from './App.vue';

new Vue({
  vuex,
  router,
  render: h => h(App)
}).$mount('#app');
