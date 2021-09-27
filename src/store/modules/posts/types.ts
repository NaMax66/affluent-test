import { Post } from '@/specification/DTO/Post';
import { ActionContext } from 'vuex';

export interface State {
  postList: Post[]
}

export interface Getters {
  getPosts(state: State): Post[]
}

export interface Mutations {
  setList(state: State, posts: Post[]): void
}

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
}
