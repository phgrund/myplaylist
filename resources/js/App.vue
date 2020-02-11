<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link
            :to="{ name: 'home' }"
          >
            {{ $t('nav.home') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'movies' }"
          >
            {{ $t('nav.movies') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'series' }"
          >
            {{ $t('nav.series') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'animes' }"
          >
            {{ $t('nav.animes') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'aboutus' }"
          >
            {{ $t('nav.aboutus') }}
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view>

    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  
</style>