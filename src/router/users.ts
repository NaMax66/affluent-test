import { RouteName } from '@/specification/Routes';
import { routes } from '@/specification/Routes';

const usersPageName: RouteName = 'users';

const UsersPage = () => import('@/pages/Users.vue');

export default [
  {
    path: routes[usersPageName],
    name: usersPageName,
    component: UsersPage
  }
];
