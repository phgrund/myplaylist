require('./bootstrap');

import Vue from 'vue';
import vuex from 'vuex';
import router from './router';
import i18n from './translation';

import App from './App.vue';

new Vue({
  vuex,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');
