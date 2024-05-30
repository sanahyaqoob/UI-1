<template>
  <div class="editor">
    <!-- Include code from betteridea-dev/ide here -->
    <h2>Editor Component</h2>
    <!-- You can replace the below placeholder code with actual IDE editor code -->
    <textarea style="width: 100%; height: 300px;">Editor Content</textarea>
  </div>
</template>

<script>
export default {
  name: 'Editor',
};
</script>

<style scoped>
.editor {
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
}
</style>
