<template>
  <div class="page-main">
    <h1>Main Page</h1>
    <div class="description">
      <p>
        This is an example SPA powered by Vue.js v3
      </p>
      <p>
        Here we implement some ideas related with external API interaction
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainPage',
});
</script>

<style scoped>
.page-main {
  width: 100%;
  max-width: var(--width-min-desktop);
  margin: 0 auto;
}

.description {
  margin-top: 1.5rem;
  font-size: 1.2rem;
  line-height: 1.6;
}
</style>
