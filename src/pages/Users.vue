<template>
  <div>
    <h1>Users page</h1>
    <ul class="user-list">
      <user-list-item v-for="user in userList" :user="user" :key="user.id" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import UserListItem from '@/components/users/ListItem.vue';
import { User } from '@/specification/DTO/users';

export default defineComponent({
  name: 'UsersPage',
  components: {
    UserListItem
  },

  computed: {
    ...mapGetters('users', ['getUsers']),
    userList(): User[] {
      return this.getUsers;
    }
  },

  methods: {
    ...mapActions('users', [
        'fetchList'
    ]),

    fetchUserList() {
      this.fetchList();
    }
  },

  created() {
    if (!this.userList.length) {
      this.fetchUserList();
    }
  }
});
</script>

<style scoped>
.user-list {
  margin-top: 2rem;
  list-style: none;
}
</style>
