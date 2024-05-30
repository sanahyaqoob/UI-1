<template>
  <div id="app">
    <Header />
    <Home />
    <Wallet />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Home from './views/Home.vue';
import Wallet from './components/Wallet.vue';

export default {
  components: {
    Header,
    Home,
    Wallet,
  },
};
</script>

<style>
@import './assets/styles.css';
</style>
