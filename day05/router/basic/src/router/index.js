import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

import BoardList1 from "@/components/router01/BoardList.vue";
import PictureList1 from "@/components/router01/PictureList.vue";
import FileList1 from "@/components/router01/FileList.vue";

import BoardList2 from "@/components/router02/BoardList.vue";
import BoardDetail from "@/components/router02/BoardDetail.vue";

const route = createRouter ({

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: HomeView,
    },
    {
      path: '/r01/board',
      name: 'r01Board',
      component: BoardList1
    },
    {
      path: '/r01/picture',
      name: 'r01Picture',
      component : PictureList1
    },
    {
      path: '/r01/file',
      name: 'r01File',
      component : FileList1
    },
    {
      path: '/r02/board',
      name: 'r02Board',
      component : BoardList2
    },
    {
      path: '/r02/board/:no',
      name: 'r02BoardId',
      component : BoardDetail
    },
  ]

});

export default route;
