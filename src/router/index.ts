import { createRouter, createWebHistory } from 'vue-router';
import users from '@/router/users'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...users
  ]
})
