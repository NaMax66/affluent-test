<template>
  <div>
    <h1>Users page</h1>
    <div class="user-page-content">
      <ul class="user-list">
        <user-list-item @click="removeUserFromList(user.id)" v-for="user in userList" :user="user" :key="user.id" />
        <li>
          <button @click="onAddUserClick">Add new user</button>
        </li>
      </ul>
      <user-settings />
    </div>
    <button @click="onTest">ChangeName</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import UserListItem from '@/components/users/ListItem.vue';
import { User } from '@/specification/DTO/User';
import UserSettings from '@/components/users/UserSettings.vue';

export default defineComponent({
  name: 'UsersPage',
  components: {
    UserSettings,
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
  flex-basis: 50%;
}

.user-page-content {
  display: flex;
}
</style>
