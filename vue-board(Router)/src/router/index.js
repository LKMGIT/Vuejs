import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/TheHomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/board",
      name: "board",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AppBoardView.vue"),
      redirect: { name: "article-list" },
      children: [
        {
          path: "list",
          name: "article-list",
          component: () => import("@/components/board/BoardList.vue"),
        },
        {
          path: "view/:articleno",
          name: "article-view",
          component: () => import("@/components/board/BoardDetail.vue"),
        },
        {
          path: "write",
          name: "article-write",
          component: () => import("@/components/board/BoardWrite.vue"),
        },
        {
          path: "modify/:articleno",
          name: "article-modify",
          component: () => import("@/components/board/BoardModify.vue"),
        },
      ],
    },
    {
      path: "/notice",
      name: "notice",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HelpDeskView.vue"),
      redirect: { name: "notice-list" },
      children: [
        {
          path: "list",
          name: "notice-list",
          component: () => import("@/components/helpdesk/NoticeList.vue"),
        },
        {
          path: "view/:articleno",
          name: "notice-view",
          component: () => import("@/components/helpdesk/NoticeDetail.vue"),
        },
        
      ],
    },
    {
      path: "/faq",
      name: "faq",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HelpDeskView.vue"),
      redirect: { name: "faq-list" },
      children: [
        {
          path: "list",
          name: "faq-list",
          component: () => import("@/components/helpdesk/FAQList.vue"),
        },
        {
          path: "view/:articleno",
          name: "notice-view",
          component: () => import("@/components/helpdesk/NoticeDetail.vue"),
        },
        
      ],
    },
    {
      path: "/store",
      name: "store",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HelpDeskView.vue"),
      redirect: { name: "store-list" },
      children: [
        {
          path: "list",
          name: "store-list",
          component: () => import("@/components/helpdesk/Store.vue"),
        },
        
        
      ],
    },
  ],
});

export default router;
