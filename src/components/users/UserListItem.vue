<template>
  <li class="user-list-item">
    <h4 class="user-list-item__name">{{ user.name }}</h4>
    <button class="user-list-item__action" @click="onRemove" title="remove user">X</button>
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
  },
  methods: {
    onRemove() {
      this.$emit('remove', this.user.id);
    }
  }
});
</script>

<style scoped>
.user-list-item {
  display: flex;
  padding: 0.5rem;
  border-radius: 2px;
}

.user-list-item:hover {
  background-color: var(--c-light-gray);
}

.user-list-item__name {
  margin-right: 1rem;
}

.user-list-item__action {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: auto;
}
</style>
