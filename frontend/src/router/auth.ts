

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: 'login',
    name: 'auth.login',
    component: () =>
      import(/* webpackChunkName: "auth" */ '../views/auth/Login.vue'),
  },

  {
    path: 'register',
    name: 'auth.register',
    component: () =>
      import(/* webpackChunkName: "auth" */ '../views/auth/Register.vue'),
  },

  {
    path: 'reset-password',
    name: 'auth.reset-password',
    component: () =>
      import(/* webpackChunkName: "auth" */ '../views/auth/ResetPassword.vue'),
  },

 
];

export default routes;
