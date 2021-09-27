export const routes = {
    mainPage: '/',
    photos: '/photos',
    posts: '/posts',
    users: '/users'
  } as const;

export type RouteName = keyof typeof routes;
