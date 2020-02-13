import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  'pt-br': {
    nav: {
      home: 'Página Inicial',
      movies: 'Filmes',
      series: 'Séries',
      animes: 'Animes',
      aboutus: 'Sobre nós',
    },
    home: {
      welcome: 'Bem-vindo(a)',
      intro: 'MyPlaylist, um lugar para você salvar o que você anda assistindo.'
    },
    aboutUs: {
      desc: 'Estudante de Ciência da Computação na {uvv}'
    }
  },
  'en-us': {
    nav: {
      home: 'Home',
      movies: 'Movies',
      series: 'Series',
      animes: 'Animes',
      aboutus: 'About Us',
    },
    home: {
      welcome: 'Welcome',
      intro: 'MyPlaylist, a place for you to save what you\'ve been watching.'
    },
    aboutUs: {
      desc: 'Computer Science student at {uvv}'
    }
  }
}

export default new VueI18n({
  locale: 'en-us',
  messages
});
