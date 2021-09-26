<template>
  <form class="user-settings">
    <input ref="username" class="user-settings__input" placeholder="login" v-model="username" />
    <input class="user-settings__input" placeholder="name" v-model="name" />
    <input class="user-settings__input" placeholder="e-mail" v-model="email" />
    <div class="user-settings__controls">
      <button class="user-settings__accept" @click="onAccept">Accept</button>
      <button class="user-settings__remove" @click="onRemove" title="remove user">X</button>
    </div>
    <span class="user-settings__hint">or press Enter to submit change</span>
    <div class="user-settings__add-new">
      <button class="add-new-user-button" @click="onAddUserClick">Add new user</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { User } from '@/specification/DTO/User';

export default defineComponent({
  name: 'UserSettings',
  data: () => ({
    name: '',
    username: '',
    email: ''
  }),

  props: {
    user: {
      type: Object as PropType<User>,
    }
  },

  watch: {
    user(user: User) {
      this.name = user.name ? user.name : '';
      this.username = user.username ? user.username : '';
      this.email = user.email ? user.email : '';
    }
  },

  methods: {
    focusOnUsername() {
      /* @ts-ignore */
      this.$refs.username.focus();
    },

    onAddUserClick(e: InputEvent) {
      e.preventDefault();
      if (!this.username) {
        this.focusOnUsername();
        return;
      }

      const newUser: Omit<User, 'id'> = {
        name: this.name,
        username: this.username,
        email: this.email
      };

      this.$emit('add-new-user', newUser);

      this.clearForm();
    },

    onRemove(e: InputEvent) {
      e.preventDefault();
      this.clearForm();
      this.$emit('remove', this.user?.id);
    },

    clearForm() {
      this.name = '';
      this.username = '';
      this.email = '';
    },

    onAccept(e: InputEvent) {
      e.preventDefault();
      const newUser = Object.assign(this.user, {
        name: this.name,
        username: this.username,
        email: this.email
      });

      this.$emit('change-settings', newUser);
    }
  }
});
</script>

<style scoped>
.user-settings {
  padding: 1rem;
  border-radius: 2px;
  border: 1px solid var(--c-light-gray);
}
.user-settings__input {
  display: block;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  width: 100%;
}

.user-settings__hint {
  display: block;
  color: var(--c-light-gray);
}

.user-settings__controls {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.user-settings__accept,
.user-settings__remove {
  display: inline-block;
  padding: 0 0.3rem;
}

.user-settings__add-new {
  margin-top: 2rem;
}

.add-new-user-button {
  padding: 0.5rem 1rem;
  width: 100%;
}
</style>
