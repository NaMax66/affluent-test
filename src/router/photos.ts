import { RouteName } from '@/specification/Routes';
import { routes } from '@/specification/Routes';

const photosPageName: RouteName = 'photos';

const PhotosPage = () => import('@/pages/Photos.vue');

export default [
  {
    path: routes[photosPageName],
    name: photosPageName,
    component: PhotosPage
  }
];
