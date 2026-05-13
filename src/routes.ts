import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeView from './views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    component: HomeView
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('./views/UsersListView.vue')
  },
  {
    path: '/users/:id',
    name: 'userview',
    component: () => import('./views/UserView.vue')
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;