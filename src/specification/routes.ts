export type RouteName = 'mainPage' | 'users' | 'comments' | 'photos'

type Routes = {[key in RouteName]: string}

export const routes: Routes = {
    mainPage: '/',
    photos: '/photos',
    comments: '/comments',
    users: '/users'
  };
