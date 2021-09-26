<template>
  <li class="user-list-item">
    <div class="user-list-item__name">
      <h5>{{ user.username }}</h5>
      <div class="additional-info">
        <p>{{ user.email}}</p>
        <p>{{ user.name}}</p>
      </div>
    </div>
    <button class="user-list-item__edit" @click="onEdit" title="remove user">Edit</button>
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
    onEdit() {
      this.$emit('edit');
    }
  }
});
</script>

<style scoped>
.user-list-item {
  display: flex;
  padding: 0.5rem;
  border-radius: 2px;
  align-items: center;
}

.user-list-item:hover {
  background-color: var(--c-light-gray);
}

.user-list-item__name {
  margin-right: auto;
}

.user-list-item__edit {
  margin-left: 0.5rem;
  padding: 0 0.5rem;
  height: 1.5rem;
}
.additional-info {
  font-size: 0.8rem;
}
</style>
