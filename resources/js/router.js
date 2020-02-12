import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home.vue';
import Movies from './views/Movies.vue';
import Series from './views/Series.vue';
import Animes from './views/Animes.vue';
import AboutUs from './views/AboutUs.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movies',
      name: 'movies',
      component: Movies
    },
    {
      path: '/series',
      name: 'series',
      component: Series
    },
    {
      path: '/animes',
      name: 'animes',
      component: Animes
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUs
    }
  ],
  mode: 'history'
})
