<template>
  <div class="page-posts">
    <h1>Posts page</h1>
    <!-- enhancement: add post list filtration by userId -->
    <div>
      <ul class="post-list">
        <post-list-item class="post-list-item" v-for="post in postList" :post="post" :key="post.id" />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import { Post } from '@/specification/DTO/Post';
import PostListItem from '@/components/posts/PostListItem.vue';

export default defineComponent({
  name: 'PostsPage',
  components: { PostListItem },
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

.post-list {
  margin-top: 2rem;
  list-style: none;
}

.post-list-item:not(:last-child) {
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--c-light-gray);
}
</style>
