<template>
  <li class="list-item">
    <h3>{{ user.name }}</h3>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { User } from '@/specification/DTO/User';

export default defineComponent({
  name: 'UserListItem',
  props: {
    user: {
      type: Object as PropType<User>,
      required: true
    }
  }
});
</script>

<style scoped>

</style>
