export const routes = {
    mainPage: '/',
    photos: '/photos',
    comments: '/comments',
    users: '/users'
  } as const;

export type RouteName = keyof typeof routes;
