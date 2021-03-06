import { createStore } from 'vuex';
import users from './modules/users';
import posts from './modules/posts';

export const store = createStore({
  modules: {
    users,
    posts
  }
});
