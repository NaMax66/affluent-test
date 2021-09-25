<template>
  <div>
    <h1>Users page</h1>
    <list-default />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListDefault from '@/components/ListDefault.vue';

export default defineComponent({
  name: 'UsersPage',
  components: { ListDefault }
});
</script>

<style scoped>

</style>
