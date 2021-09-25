<template>
  <nav class="navigation-sidebar">
    <ul class="navigation-list">
      <li class="navigation-list__item">
        <router-link class="router-link" active-class="router-link--active" :to="getLinkByRouteName('mainPage')">main</router-link>
      </li>
      <li class="navigation-list__item">
        <router-link class="router-link" active-class="router-link--active" :to="getLinkByRouteName('users')">users</router-link>
      </li>
      <li class="navigation-list__item">
      <router-link class="router-link" active-class="router-link--active" :to="getLinkByRouteName('comments')">comments</router-link>
      </li>
      <li class="navigation-list__item">
      <router-link class="router-link" active-class="router-link--active" :to="getLinkByRouteName('photos')">photos</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteName } from '@/specification/routes';
import { routes } from '@/specification/routes';

export default defineComponent({
  name: "NavigationSidebar",
  methods: {
    getLinkByRouteName(name: RouteName) {
      return routes[name];
    }
  }
});
</script>

<style scoped>
.navigation-sidebar {
  width: 8rem;
  height: 100vh;
  background-color: var(--c-black);
  padding: 1rem;
}

.navigation-list {
  list-style: none;
}

.navigation-list__item {
  font-size: 1.2rem;
  line-height: 1.2;
  margin: 0.5rem 0;
}

.router-link {
  color: var(--c-white);
  text-decoration: none;
  transition: 0.2s;
}

.router-link--active {
  color: var(--c-orange);
}
</style>
