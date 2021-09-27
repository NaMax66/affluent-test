import { createRouter, createWebHistory } from 'vue-router';
import users from '@/router/users';
import comments from '@/router/posts';
import photos from '@/router/photos';

import { RouteName } from '@/specification/Routes';
import { routes } from '@/specification/Routes';

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
