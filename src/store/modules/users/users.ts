import { GetterTree, MutationTree, ActionTree } from 'vuex';
import { State, Getters, Mutations, Actions } from './types';

import { User } from '@/specification/DTO/users';

import { readUsers } from '@/api/clients.api';

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
    const users = await readUsers();

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

