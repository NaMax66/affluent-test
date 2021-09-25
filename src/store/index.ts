import { createStore } from 'vuex';
import users from './users';

export const store = createStore({
  modules: {
    users
  }
});
