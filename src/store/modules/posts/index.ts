import { GetterTree, MutationTree, ActionTree } from 'vuex';
import { State, Getters, Mutations, Actions } from './types';
import { Post } from '@/specification/DTO/Post';

import { readPosts } from '@/api/posts.api';

const state: State = {
  postList: []
};

const getters: GetterTree<State, {}> & Getters = {
  getPosts: (state) => state.postList
};

const mutations: MutationTree<State> & Mutations = {
  setList(state: State, posts: Post[]) {
    state.postList = posts;
  },
};

const actions: ActionTree<State, {}> & Actions = {
  async fetchList({ commit }): Promise<void> {
    const posts = await readPosts();

    commit('setList', posts);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

