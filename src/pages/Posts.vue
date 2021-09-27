<template>
  <div class="page-posts">
    <h1>Posts page</h1>
    <div>
      <ul>
        <li v-for="post in postList" :key="post.id">
          {{ post.id }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import { Post } from '@/specification/DTO/Post';

export default defineComponent({
  name: 'PostsPage',

  data: () => ({
    isListLoading: false
  }),

  computed: {
    ...mapGetters('posts', ['getPosts']),
    postList(): Post[] {
      return this.getPosts;
    },
  },

  methods: {
    ...mapActions('posts', [
      'fetchList',
    ]),

    async fetchPostList() {
      this.isListLoading = true;
      await this.fetchList();
      this.isListLoading = false;
    },
  },

  created() {
    if (!this.postList.length) {
      this.fetchPostList();
    }
  }
});
</script>

<style scoped>
.page-posts {
  width: 100%;
  max-width: var(--width-max-desktop);
  margin: 0 auto;
}
</style>
