<template>
  <div class="home">
    <Editor />
    <Terminal />
  </div>
</template>

<script>
import Editor from '../components/Editor.vue';
import Terminal from '../components/Terminal.vue';

export default {
  components: {
    Editor,
    Terminal,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('../assets/dynamic-bg.gif') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
}
</style>