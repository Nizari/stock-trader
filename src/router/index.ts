import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Dashboard from '@/views/Dashboard/Dashboard.vue';
import Portfolio from '@/views/Portfolio/Portfolio.vue';
import Stocks from '@/views/Stocks/Stocks.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '@/views/Portfolio/Portfolio'),
  },
  {
    path: '/stocks',
    name: 'stocks',
    component: Stocks,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '@/views/Portfolio/Portfolio'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
