<template>
  <main>
    <h1>{{ $t('home.welcome') }}</h1>
    <p>{{ $t('home.intro') }}</p>
  </main>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
  main {
    text-align: center;
  }

  main > h1 {
    margin-bottom: 20px;
    color: #0067ff;
  }

</style>
