<template>
  <div>
    <h1>Users page</h1>
    <div class="user-page-content">
      <ul class="user-list">
        <user-list-item
            class="user-list-item"
            @remove="onUserRemove"
            @click="setActiveUser" v-for="user in userList"
            :user="user"
            :key="user.id"
        />
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
import UserListItem from '@/components/users/UserListItem.vue';
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

    onUserRemove(id: number) {
      // enhancement: add preloader for user item. Or remove locally first then wait response and make decision
      this.removeUserFromList(id);
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
  max-width: 400px;
  margin-right: auto;
}

.user-page-content {
  display: flex;
}

.user-list-item {
  transition: background-color 0.2s;
}
.user-list-item:not(:last-child) {
  margin-bottom: 1rem;
}
</style>
