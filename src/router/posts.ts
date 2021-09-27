import { RouteName } from '@/specification/Routes';
import { routes } from '@/specification/Routes';

const commentsPageName: RouteName = 'posts';

const PostsPage = () => import('@/pages/Posts.vue');

export default [
  {
    path: routes[commentsPageName],
    name: commentsPageName,
    component: PostsPage
  }
];
