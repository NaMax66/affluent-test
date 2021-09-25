<template>
  <LayoutDefault>
    <router-view />
  </LayoutDefault>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LayoutDefault from "@/components/LayoutDefault.vue";

export default defineComponent({
  name: 'App',
  components: { LayoutDefault },
});
</script>

<style>
#app {
  font-family: system-ui, sans-serif;
}
</style>
