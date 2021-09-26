<template>
  <div>
    <h1>Users page</h1>
    <ul class="user-list">
      <user-list-item @click="removeUserFromList(user.id)" v-for="user in userList" :user="user" :key="user.id" />
      <button @click="onAddUserClick">Create</button>
      <button @click="onTest">ChangeName</button>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import UserListItem from '@/components/users/ListItem.vue';
import { User } from '@/specification/DTO/User';

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
        'fetchList',
        'addUser',
        'removeUserFromList',
        'changeUserData'
    ]),

    onTest() {
      const user: User = {
        id: 1,
        name: 'Tommy',
        username: 'Jerk'
      };
      this.changeUserData(user);
    },

    fetchUserList() {
      this.fetchList();
    },

    onAddUserClick() {
      const user: Omit<User, 'id'> = {
        name: 'Bob',
        username: 'Marley',
      };

      this.addUser(user);
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
