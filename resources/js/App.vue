<template>
  <div class="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  .app {
    min-height: 100vh;
    background-color: #fff;
    color: #000;
  }

  .container {
    padding: 20px;
  }

  p::selection,
  h1::selection,
  h2::selection,
  h3::selection,
  h4::selection {
    background-color: rgba(255, 255, 255, 0.1);
  }
</style>
