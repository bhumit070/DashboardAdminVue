import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/pages/Login'),
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: () => import('@/views/layout/Layout'),
    children: [
      {
        name: 'dashboard',
        path: '/dashboard',
        component: () => import('@/views/pages/Dashboard'),
      },
      {
        name: 'page1',
        path: '/page1',
        component: () => import('@/views/pages/Page1'),
      },
      {
        name: 'page2',
        path: '/page2',
        component: () => import('@/views/pages/Page2'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
