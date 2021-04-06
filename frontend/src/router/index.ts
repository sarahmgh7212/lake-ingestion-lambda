import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import pagesRoutes from "./pages";
import authRoutes from "./auth";
import appRoutes from "./app";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/app/",
  },

  {
    path: "/app",
    children: appRoutes,
    component: () =>
      import(/* webpackChunkName: "mist-app" */ "../layouts/AppLayout.vue"),
  },

  {
    path: "/pages",
    children: pagesRoutes,
    component: () =>
      import(/* webpackChunkName: "pages" */ "../layouts/PageLayout.vue"),
  },

  {
    path: "/auth",
    children: authRoutes,
    component: () =>
      import(/* webpackChunkName: "auth" */ "../layouts/AuthLayout.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
