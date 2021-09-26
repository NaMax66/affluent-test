import { RouteName } from '@/specification/Routes';
import { routes } from '@/specification/Routes';

const commentsPageName: RouteName = 'comments';

const CommentsPage = () => import('@/pages/Comments.vue');

export default [
  {
    path: routes[commentsPageName],
    name: commentsPageName,
    component: CommentsPage
  }
];
