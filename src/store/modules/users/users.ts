import { GetterTree, MutationTree, ActionTree, ActionContext } from 'vuex';
import { User } from '@/specification/DTO/users';

interface State {
  list: User[]
}

interface Getters {
  getUsers(state: State): User[];
}

interface Mutations {
  setList(state: State, payload: User[]): void;
}

interface AugmentedActionContext extends Omit<ActionContext<State, {}>, 'commit'> {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
}

interface Actions {
  fetchList(
    { commit }: AugmentedActionContext
  ): Promise<void>;
}

const state: State = {
  list: []
};

const getters: GetterTree<State, {}> & Getters = {
  getUsers: (state) => state.list
};

const mutations: MutationTree<State> & Mutations = {
  setList(state: State, payload: User[]) {
    state.list = payload;
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

