<template>
  <header>
    <h1>AOS UI Website</h1>
    <button @click="connectWallet">Connect Wallet</button>
  </header>
</template>

<script>
export default {
  methods: {
    async connectWallet() {
      if (window.arweaveWallet) {
        try {
          await window.arweaveWallet.connect(['ACCESS_ADDRESS']);
          alert('Wallet Connected');
        } catch (e) {
          alert('Connection failed');
        }
      } else {
        alert('ArConnect is not installed');
      }
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
}
button {
  background-color: #ff5722;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}
</style>
