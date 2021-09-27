<template>
  <li class="user-list-item">
    <div class="user-list-item__name">
      <h5>{{ user.name }}</h5>
      <div class="additional-info">
        <p>e-mail: {{ user.email}}</p>
        <p>phone: {{ user.phone }}</p>
      </div>
    </div>
    <div class="user-list-item__controls">
      <button class="user-list-item__edit" @click="onEdit" title="remove user">Edit</button>
      <button class="user-list-item__remove" @click="onRemove" title="remove user">X</button>
    </div>
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
    },

    onRemove(e: InputEvent) {
      e.preventDefault();
      this.$emit('remove', this.user.id);
    },
  }
});
</script>

<style scoped>
.user-list-item {
  display: flex;
  padding: 0.5rem 0;
  border-radius: 2px;
  align-items: center;
}

.user-list-item__controls {
  visibility: hidden;
  opacity: 0;
  transition: 0.2s;
}

@media (max-width: 768px){
  .user-list-item__controls {
    visibility: visible;
    opacity: 1;
  }
}

.user-list-item__controls {

}

.user-list-item:hover > .user-list-item__controls {
  visibility: visible;
  opacity: 1;
}

.user-list-item__name {
  margin-right: auto;
}

.user-list-item__remove,
.user-list-item__edit {
  margin-left: 0.5rem;
  padding: 0 0.5rem;
  height: 1.5rem;
}
.additional-info {
  font-size: 0.8rem;
}
</style>
