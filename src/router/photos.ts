import { RouteName } from '@/specification/routes';
import { routes } from '@/specification/routes';

const photosPageName: RouteName = 'photos';

const PhotosPage = () => import('@/pages/Photos.vue');

export default [
  {
    path: routes[photosPageName],
    name: photosPageName,
    component: PhotosPage
  }
];
