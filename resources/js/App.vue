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
    background-color: #002863;
    color: #fff;
  }
  .container {
    padding: 20px;
  }
</style>
