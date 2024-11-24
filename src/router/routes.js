const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DashBoardPage.vue') },
      { path: '/dashboard', component: () => import('pages/RunTable.vue') },
      { path: '/add', component: () => import('pages/AddRunPage.vue') },
      { path: '/routing', component: () => import('pages/RoutingPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
