import { GetterTree, MutationTree, ActionTree } from 'vuex';
import { State, Getters, Mutations, Actions } from './types';

import { User } from '@/specification/DTO/User';

import { createUser, readUsers, updateUser, deleteUser } from '@/api/clients.api';

import errorHandler from '@/services/apiErrorHandler';
import { ResponseStatus } from '@/specification/ResponseStatus';

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
  },

  replaceUserInList(state: State, user: User) {
    const userIndex = state.userList.findIndex(listUser => listUser.id === user.id);

    if (userIndex !== -1) {
      state.userList = [
        ...state.userList.slice(0, userIndex),
        user,
        ...state.userList.slice(userIndex + 1),
      ];
    }
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
      const result: ResponseStatus = await deleteUser(id);
      if (result === 'success') {
        commit('removeUserFromList', id);
      }
  },

  async changeUserData({ commit }, user: User): Promise<void> {
    const returnedUser = await updateUser(user);

    if (returnedUser.id === user.id) {
      commit('replaceUserInList', returnedUser);
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

