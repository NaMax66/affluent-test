import { GetterTree, MutationTree, ActionTree } from 'vuex';
import { State, Getters, Mutations, Actions } from './types';

import { User } from '@/specification/DTO/users';

const state: State = {
  userList: []
};

const getters: GetterTree<State, {}> & Getters = {
  getUsers: (state) => state.userList
};

const mutations: MutationTree<State> & Mutations = {
  setList(state: State, payload: User[]) {
    state.userList = payload;
  }
};

const actions: ActionTree<State, {}> & Actions = {
  async fetchList({ commit }): Promise<void> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    /* enhancement: add user list validation */
    const users: User[] = await response.json();

    commit('setList', users);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

