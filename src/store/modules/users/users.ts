import { GetterTree, MutationTree, ActionTree } from 'vuex';
import { State, Getters, Mutations, Actions } from './types';

import { User } from '@/specification/DTO/users';

import { readUsers, createUser } from '@/api/clients.api';

const state: State = {
  userList: []
};

const getters: GetterTree<State, {}> & Getters = {
  getUsers: (state) => state.userList
};

const mutations: MutationTree<State> & Mutations = {
  setList(state: State, users: User[]) {
    state.userList = users;
  },

  addUserToList(state: State, user: User) {
    state.userList.push(user);
  }
};

const actions: ActionTree<State, {}> & Actions = {
  async fetchList({ commit }): Promise<void> {
    const users = await readUsers();

    commit('setList', users);
  },

  async addUser({ commit }, user: User): Promise<void> {
    const returnedUser = await createUser(user);
    commit('addUserToList', returnedUser);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

