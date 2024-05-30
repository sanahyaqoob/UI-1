<template>
  <div class="wallet">
    <button @click="connectWallet">Connect ArConnect Wallet</button>
    <div v-if="address">
      <p>Wallet Address: {{ address }}</p>
      <button @click="disconnectWallet">Disconnect</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: null,
    };
  },
  methods: {
    async connectWallet() {
      if (window.arweaveWallet) {
        try {
          await window.arweaveWallet.connect(['ACCESS_ADDRESS', 'SIGN_TRANSACTION']);
          const address = await window.arweaveWallet.getActiveAddress();
          this.address = address;
          alert('Wallet Connected');
        } catch (e) {
          alert('Connection failed');
        }
      } else {
        alert('ArConnect is not installed');
      }
    },
    async disconnectWallet() {
      if (window.arweaveWallet) {
        await window.arweaveWallet.disconnect();
        this.address = null;
        alert('Wallet Disconnected');
      }
    },
  },
};
</script>

<style scoped>
.wallet {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
button {
  background-color: #ff5722;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
}
p {
  margin-top: 10px;
}
</style>
