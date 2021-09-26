import { GetterTree, MutationTree, ActionTree } from 'vuex';
import { State, Getters, Mutations, Actions } from './types';

import { User } from '@/specification/DTO/User';

import { readUsers, createUser, deleteUser } from '@/api/clients.api';

import errorHandler from '@/services/apiErrorHandler';
import { Status } from '@/specification/Status';

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
  },

  removeUserFromList(state: State, id: number) {
    state.userList = state.userList.filter(user => user.id !== id);
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
  },

  async removeUserFromList({ commit }, id: number): Promise<void> {
      const result: Status = await deleteUser(id);
      if (result === 'success') {
        commit('removeUserFromList', id);
      }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

