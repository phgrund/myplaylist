<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link
            :to="{ name: 'home' }"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'movies' }"
          >
            Movies
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'series' }"
          >
            Series
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'animes' }"
          >
            Animes
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'aboutus' }"
          >
            About Us
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