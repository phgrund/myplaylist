import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  'en-us': {
    nav: {
      home: 'Página Inicial',
      movies: 'Filmes',
      series: 'Séries',
      animes: 'Animes',
      aboutus: 'Sobre nós',
    }
  },
  'pt-br': {
    nav: {
      home: 'Home',
      movies: 'Movies',
      series: 'Series',
      animes: 'Animes',
      aboutus: 'About Us',
    }
  }
}

export default new VueI18n({
  locale: 'en',
  messages
});
