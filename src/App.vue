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
/* todo move to file */
:root {
  --width-min-desktop: 1024px;
  --width-min-tablet: 768px;

  --c-white: #F5F5F5;
  --c-light-gray: #BDBDBD;
  --c-black: #212121;
  --c-orange: #f56a3f;
}

body {
  font-family: system-ui, sans-serif;
  font-size: 100%;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: var(--c-black);
}

</style>
