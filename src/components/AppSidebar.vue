<template>
  <nav>
    <ul>
      <li>
        <router-link :to="getRouterLinkByName('mainPage')">main</router-link>
      </li>
      <li>
        <router-link :to="getRouterLinkByName('users')">users</router-link>
      </li>
      <li>
        <router-link :to="getRouterLinkByName('comments')">comments</router-link>
      </li>
      <li>
        <router-link :to="getRouterLinkByName('photos')">photos</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteName } from '@/specification/routes';
import { routes } from '@/specification/routes';

export default defineComponent({
  name: "AppSidebar",
  methods: {
    getRouterLinkByName(name: RouteName) {
      return routes[name];
    }
  }
});
</script>

<style scoped>

</style>
