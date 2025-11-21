import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
const router = createRouter({
  // 라우트 구성 객체
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },

    // 'user/:id'  '/:user/:id  => /john/1, /mypage/setting 

    // {
    //   path: '/:user/:id/profile',
    //   name: 'user',
    //   component: () => import('../views/UserInfo.vue'),
    // },

    {
      path: '/user/info',
      name: 'userInfo',
      component: () => import('../views/UserView.vue'),
    },

    {
      path: '/user/:id',
      name: 'userView',
      component: () => import('../views/UserViewComposition.vue'),
    },

  ],
});
export default router;