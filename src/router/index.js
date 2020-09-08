import Vue from 'vue';
import VueRouter from 'vue-router';
import { authRoutes } from './modules/authRoutes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/auth/login'
  },
  ...authRoutes
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
