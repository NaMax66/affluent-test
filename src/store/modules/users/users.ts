import { MutationTree, ActionTree, ActionContext } from 'vuex';
import { User } from '@/specification/DTO/users';

interface State {
  list: User[]
}

const state: State = {
  list: []
};

const mutations: MutationTree<State> = {
  setList(state:State, users: User[]) {
    state.list = users;
  }
};

type Mutations = typeof mutations;

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, {}>, 'commit'>

export interface Actions {
  fetchList(
    { commit }: AugmentedActionContext
  ): Promise<void>;
}

const actions: ActionTree<State, {}> & Actions = {
  async fetchList({ commit }): Promise<void> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    commit('setList', users);
  }
};

const users = {
  namespaced: true,
  state,
  mutations,
  actions
};

export default users;
