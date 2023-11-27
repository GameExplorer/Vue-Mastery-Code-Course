import NProgress from "nprogress";

export default (router) => {
    router.beforeEach((to, from, next) => { // to: where we are going, from: where we are coming from, next: function to call to continue
        NProgress.start(); //NProgress.start is a function that will be called when the route is loading
        next(); //next is a function that will be called when we are ready to continue
    });

    router.afterEach(NProgress.done) //NProgress.done is a function that will be called when the route is done loading
}