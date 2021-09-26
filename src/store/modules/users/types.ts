import { User } from '@/specification/DTO/users';
import { ActionContext } from 'vuex';

export interface State {
  userList: User[]
}

export interface Getters {
  getUsers(state: State): User[]
}

export interface Mutations {
  setList(state: State, users: User[]): void
  addUserToList(state: State, user: User): void
}

// explanation: use it because of native vuex 'commit' has 'any' type
interface AugmentedActionContext extends Omit<ActionContext<State, {}>, 'commit'> {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
}

export interface Actions {
  fetchList(
    { commit }: AugmentedActionContext
  ): Promise<void>

  addUser(
    { commit }: AugmentedActionContext,
    user: User
  ): Promise<void>
}
