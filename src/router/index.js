import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import ComicView from "@/views/ComicView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/default/AboutView.vue'),
    },
    {
      path:'/home',
      name:'home',
      component:()=>import('../views/HomeView.vue')
    },{
    path:'/comic',
      name:'comic',
      component:()=>import('../views/ComicView.vue')
    }
  ],
})

export default router
