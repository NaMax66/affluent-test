<template>
  <ul class="list-default">
    <li v-for="item in 5" :key="item">{{ item }}</li>
  </ul>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListDefault"
});
</script>

<style scoped>
.list-default {
  list-style: none;
}
</style>
