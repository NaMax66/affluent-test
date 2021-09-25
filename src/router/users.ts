import { RouteName } from '@/specification/routes';
import { routes } from '@/specification/routes';

const usersPageName: RouteName = 'users';

const UsersPage = () => import('@/pages/Users.vue');

export default [
  {
    path: routes[usersPageName],
    name: usersPageName,
    component: UsersPage
  }
];
