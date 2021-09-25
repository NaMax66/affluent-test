<template>
  <div>
    <h1>Users page</h1>
    <button @click="setUserList">set users</button>
    <button @click="fetchUserList">fetch users</button>
    <list-default />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListDefault from '@/components/ListDefault.vue';
import { mapMutations, mapActions } from 'vuex';

export default defineComponent({
  name: 'UsersPage',
  components: { ListDefault },
  methods: {
    ...mapMutations('users', [
        'setList'
    ]),
    ...mapActions('users', [
        'fetchList'
    ]),

    setUserList() {
      this.setList([{id: 1, name: 'John'}]);
    },

    fetchUserList() {
      this.fetchList();
    }
  }
});
</script>

<style scoped>

</style>
