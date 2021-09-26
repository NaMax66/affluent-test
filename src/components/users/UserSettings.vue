<template>
  <form class="user-settings">
    <input class="user-settings__input" placeholder="login" :value="username" />
    <input class="user-settings__input" placeholder="name" :value="name" />
    <input class="user-settings__input" placeholder="e-mail" :value="email" />
    <button @click="onAccept">Accept</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { User } from '@/specification/DTO/User';

export default defineComponent({
  name: 'UserSettings',
  data: () => ({
    name: null,
    username: null,
    email: null
  }),
  props: {
    user: {
      type: Object as PropType<User>,
    }
  },
  watch: {
    user(value) {
      console.log(value);
    }
  },
  methods: {
    onAccept(e: InputEvent) {
      e.preventDefault();
      const newUser = Object.assign(this.user, {
        name: this.name,
        username: this.username,
        email: this.email
      });

      this.$emit('change', newUser);
    }
  }
});
</script>

<style scoped>
.user-settings__input {
  display: block;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
}
</style>
