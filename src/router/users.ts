const UsersMainPage = () => import('@/pages/UsersMain.vue')

export default [
  {
    path: '/users',
    name: 'users',
    component: UsersMainPage
  }
]
