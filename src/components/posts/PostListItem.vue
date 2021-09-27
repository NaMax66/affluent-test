<template>
  <li class="post-list-item">
    <h5>{{ post.title }}</h5>
    <p>{{ post.body }}</p>
  </li>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { Post } from '@/specification/DTO/Post';

export default {
  name: 'PostListItem',
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true
    }
  },
};
</script>

<style scoped>
.post-list-item {
  padding-bottom: 0.3rem;
  max-width: 600px;
}
</style>
