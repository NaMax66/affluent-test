<template>
  <Users />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Users from "@/pages/Users.vue";

export default defineComponent({
  name: 'App',
  components: { Users },
});
</script>

<style>
#app {
  font-family: system-ui, sans-serif;
}
</style>
