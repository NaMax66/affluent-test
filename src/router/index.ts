import { createRouter, createWebHistory } from 'vue-router';
import users from '@/router/users';
import comments from '@/router/comments';
import photos from '@/router/photos';

import { RouteName } from '@/specification/routes';
import { routes } from '@/specification/routes';

const MainPage = () => import('@/pages/Main.vue');
const mainPageName: RouteName = 'mainPage';

const mainPageRoute = {
  path: routes[mainPageName],
  name: mainPageName,
  component: MainPage
};

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    mainPageRoute,
    ...users,
    ...comments,
    ...photos
  ]
});
