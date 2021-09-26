import { createStore } from 'vuex';
import users from './modules/users/users';

export const store = createStore({
  modules: {
    users
  }
});
