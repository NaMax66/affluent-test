import { RouteName } from '@/specification/routes';
import { routes } from '@/specification/routes';

const commentsPageName: RouteName = 'comments';

const CommentsPage = () => import('@/pages/Comments.vue');

export default [
  {
    path: routes[commentsPageName],
    name: commentsPageName,
    component: CommentsPage
  }
];
