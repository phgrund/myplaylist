<template>
  <nav>
    <header class="nav-header">
      <div class="nav-title">
        MyPlaylist
      </div>
    </header>
    <div class="nav-links">
      <router-link
        :to="{ name: 'home' }"
      >
        {{ $t('nav.home') }}
      </router-link>
      <router-link
        :to="{ name: 'movies' }"
      >
        {{ $t('nav.movies') }}
      </router-link>
      <router-link
        :to="{ name: 'series' }"
      >
        {{ $t('nav.series') }}
      </router-link>
      <router-link
        :to="{ name: 'animes' }"
      >
        {{ $t('nav.animes') }}
      </router-link>
      <router-link
        :to="{ name: 'aboutus' }"
      >
        {{ $t('nav.aboutus') }}
      </router-link>
    </div>
    
  </nav>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style scoped>
  nav {
    width: 100%;
    background-color: #00265f;
    background-image: linear-gradient(to right, #001f4d , transparent 300px);
    position: relative;
  }

  .nav-header {
    display: inline;
  }

  nav > .nav-header > .nav-title {
    display: inline-block;
    font-size: 22px;
    font-weight: bold;
    color: #0067ff;
    padding: 10px 10px 10px 10px;
  }

  nav > .nav-links {
    float: right;
    font-size: 18px;
  }

  nav > .nav-links > a {
    display: inline-block;
    padding: 13px 10px 13px 10px;
    text-decoration: none;
    color: #efefef;
    transition: 0.5s background-color;
  }

  nav > .nav-links > a:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

</style>
