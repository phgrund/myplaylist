<template>
  <main>
    <img src="https://avatars1.githubusercontent.com/u/25393880?s=460&v=4" alt="eu">
    <h2>Paulo Henrique</h2>
    <p>{{ $t('aboutUs.desc', { uvv: 'Universidade Vila Velha' }) }}</p>
  </main>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style scoped>
  main {
    text-align: center;
  }
  
  img {
    max-width: 300px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  img::selection {
    color: transparent;
  }

  h2 {
    margin-bottom: 5px;
  }
</style>
