<template>
  <div>
    Users page
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
