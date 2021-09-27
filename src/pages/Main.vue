<template>
  <div class="page-main">
    <h1>Main Page</h1>
    <div class="description">
      <p>
        This is an example SPA powered by Vue.js v3
      </p>
      <p>
        You could find all <b>CRUD</b> operations on
        <router-link
          class="router-link"
          :to="getLinkByRouteName('users')"
        >
        users</router-link> page
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouteName, routes } from '@/specification/Routes';

export default defineComponent({
  name: 'MainPage',
  methods: {
    getLinkByRouteName(name: RouteName) {
      return routes[name];
    }
  }
});
</script>

<style scoped>
.page-main {
  width: 100%;
  max-width: var(--width-max-desktop);
  margin: 0 auto;
}

.description {
  margin-top: 1.5rem;
  font-size: 1.2rem;
  line-height: 1.6;
}

.router-link {
  font-size: 1.5rem;
  color: var(--c-orange);
  text-decoration: none;
  margin-top: 1rem;
  transition:  0.2s;
  border-bottom: 1px solid transparent;
}

.router-link:hover {
  border-bottom: 1px solid var(--c-orange);
}
</style>
