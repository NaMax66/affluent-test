import { MutationTree } from 'vuex';
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

const users = {
  namespaced: true,
  state,
  mutations
};

export default users;
