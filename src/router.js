import Vue from 'vue';
import Router from 'vue-router';
import Base from './views/base.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Base',
      component: Base,
      children: [
        {
          path: '',
          component: () => import('./views/home/home.vue'),
          name: 'home',
        },
        {
          path: 'detail',
          component: () => import('./views/detail/detail.vue'),
          name: 'detail',
        },
      ],
    },
  ],
});
