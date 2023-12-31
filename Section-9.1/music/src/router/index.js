import { createRouter, createWebHistory } from 'vue-router'
import useUserStore from '@/stores/user.js'

const Home = () => import("@/views/Home.vue")
const About = () => import("@/views/About.vue")
const Manage = () => import("@/views/Manage.vue")
const Song = () => import("@/views/Song.vue")

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
    // beforeEnter: (to, from, next) => {
    //   console.log("Manage route guard");
    //   next();
    // },
    //meta: {
    //  requiresAuth: true,
    //}
  },
  {
    path: '/manage',
    redirect: { name: 'manage' },
  },
  {
    name: 'song',
    path: '/song/:id',
    component: Song
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
  //console.log(to.meta); //meta is an object that we can add to any route
  if (!to.meta.requiresAuth) {
    next();
    return;
  }

  const store = useUserStore();

  if (store.userLoggedIn) {
    next();
  }
  else {
    next({ name: "home" })
  }
}); 

export default router
