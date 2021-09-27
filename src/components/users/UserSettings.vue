<template>
  <form class="user-settings" @keydown.enter="onEnter">
    <!-- enhancement: Add universal input adding. To make it easy to add and change field that needed -->
    <input ref="name" class="user-settings__input" placeholder="name" v-model="name" />
    <input class="user-settings__input" placeholder="email" v-model="email" />
    <input class="user-settings__input" placeholder="phone" v-model="phone" />
    <div class="user-settings__controls">
      <button :disabled="!isApplyChangeActive" class="user-settings__accept" @click="onAccept">Apply Change</button>
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
    email: '',
    phone: ''
  }),

  props: {
    user: {
      type: Object as PropType<User>,
    }
  },

  watch: {
    user(user: User) {
      this.name = user.name ? user.name : '';
      this.email = user.email ? user.email : '';
      this.phone = user.phone ? user.phone : '';
    }
  },

  computed: {
    isApplyChangeActive(): boolean {
      /* explanation: when no active user provided - nothing to change */
      return !!this.user?.id;
    },
  },

  methods: {
    onEnter(e: Event) {
      e.preventDefault();
    },

    focusOnName() {
      // enhancement: add ref check and remove ts-ignore
      /* @ts-ignore */
      this.$refs.name.focus();
    },

    onAddUserClick(e: InputEvent) {
      e.preventDefault();
      if (!this.name) {
        this.focusOnName();
        return;
      }

      const newUser: Omit<User, 'id'> = {
        name: this.name,
        email: this.email,
        phone: this.phone
      };

      this.$emit('add-new-user', newUser);

      this.clearForm();
    },

    clearForm() {
      this.name = '';
      this.email = '';
      this.phone = '';
    },

    onAccept(e: InputEvent) {
      e.preventDefault();
      const newUser = Object.assign(this.user, {
        name: this.name,
        email: this.email,
        phone: this.phone
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
