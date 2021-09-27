<template>
  <div class="page-users">
    <h1>Users page</h1>
    <div class="user-page-content">
      <ul class="user-list">
        <template v-if="isListLoading">
          <!-- enhancement: add skeleton loader -->
          <li>
            <p class="preloader">Loading...</p>
          </li>
        </template>
        <template v-else>
          <user-list-item
              class="user-list-item"
              v-for="user in userList"
              :user="user"
              :key="user.id"
              @edit="setActiveUser(user)"
              @remove="onUserRemove"
          />
        </template>
      </ul>
      <user-settings
          @add-new-user="onAddNewUser"
          @change-settings="onUserSettingsChange"
          class="user-settings"
          :user="activeUser"
      />
    </div>
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

  data: () => ({
    isListLoading: false,
    activeUser: {}
  }),

  computed: {
    ...mapGetters('users', ['getUsers']),
    userList(): User[] {
      return this.getUsers;
    },
  },

  methods: {
    ...mapActions('users', [
        'fetchList',
        'addUser',
        'removeUserFromList',
        'changeUserData'
    ]),

    onUserSettingsChange(user: User) {
      this.changeUserData(user);
      this.clearActiveUser();
    },

    setActiveUser(user: User) {
      this.activeUser = user;
    },

    clearActiveUser() {
      this.activeUser = {};
    },

    onUserRemove(id: number) {
      // enhancement: add preloader for user item. Or remove locally first then wait response and make decision
      this.removeUserFromList(id);
      this.clearActiveUser();
    },

    async fetchUserList() {
      this.isListLoading = true;
      await this.fetchList();
      this.isListLoading = false;
    },

    onAddNewUser(user: Omit<User, 'id'>) {
      this.clearActiveUser();
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
.page-users {
  width: 100%;
  max-width: var(--width-max-desktop);
  margin: 0 auto;
}

.preloader {
  font-size: 2rem;
}
.user-list {
  margin-top: 2rem;
  list-style: none;
  flex-basis: 50%;
  max-width: 400px;
  margin-right: 3rem;
}

.user-page-content {
  display: flex;
  align-items: flex-start;
}

.user-list-item {
  transition: background-color 0.2s;
}

.user-list-item:not(:last-child) {
  border-bottom: 1px solid var(--c-light-gray);
}

.user-settings {
  margin-top: 2.5rem;
  top: 2.5rem;
  position: sticky;
}

</style>
