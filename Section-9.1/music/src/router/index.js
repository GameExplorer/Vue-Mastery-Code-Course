import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Manage from "@/views/Manage.vue"

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: "about",
    path: '/about',
    compoment: About,
  },
  {
    name: "manage",
    //alias: '/manage', // router will render manage component when user visits /manage-music
    path: '/manage-music',
    component: Manage,
  },
  {
    path: '/manage',
    redirect: { name: 'manage' },
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' },
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //history mode
  routes,
  linkExactActiveClass: "text-yellow-500",
})

router.beforeEach((to, from, next) => { //to: where we are going, from: where we are coming from, next: function to call to continue
  console.log(to, from);
  next();
}); 

export default router
