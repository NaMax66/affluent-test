<template>
  <div>
    <h1>Comments page</h1>
    <list-default />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListDefault from '@/components/ListDefault.vue';

export default defineComponent({
  name: 'CommentsPage',
  components: { ListDefault }
});
</script>

<style scoped>

</style>
