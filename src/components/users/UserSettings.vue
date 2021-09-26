<template>
  <form class="user-settings" @keydown.enter="onEnter">
    <input ref="username" class="user-settings__input" placeholder="login" v-model="username" />
    <input class="user-settings__input" placeholder="name" v-model="name" />
    <input class="user-settings__input" placeholder="e-mail" v-model="email" />
    <div class="user-settings__controls">
      <button class="user-settings__accept" @click="onAccept">Apply Change</button>
    </div>
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
    onEnter(e: Event) {
      e.preventDefault();
    },

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

      const newUser: User = {
        id: Math.floor(Math.random() * 1000000),
        name: this.name,
        username: this.username,
        email: this.email
      };

      this.$emit('add-new-user', newUser);

      this.clearForm();
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
    },
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

.user-settings__controls {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.user-settings__add-new {
  margin-top: 1rem;
}

.user-settings__accept,
.add-new-user-button {
  padding: 0.5rem 1rem;
  width: 100%;
}
</style>
