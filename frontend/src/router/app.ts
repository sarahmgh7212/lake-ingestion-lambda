
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'app.home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   
    component: () =>
      import(/* webpackChunkName: "lake-ingestion-app" */ '../views/app/Home.vue'),
  },
//   {
//     path: 'apps',
//     name: 'app.apps.list',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "mist-app" */ '../views/app/apps/ListApps.vue'),
//   },
//   {
//     path: '/version/:id',
//     name: 'app.versions.show',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(
//         /* webpackChunkName: "mist-app" */ '../views/app/versions/ShowVersion.vue'
//       ),
//   },
//   {
//     path: 'users',
//     name: 'app.users.list',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "mist-app" */ '../views/app/users/ListUsers.vue'),
//   },
//   {
//     path: 'users/:id',
//     name: 'app.users.show',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "mist-app" */ '../views/app/users/ShowUser.vue'),
//   },
//   {
//     path: 'settings',
//     name: 'app.settings',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "mist-app" */ '../views/app/Settings.vue'),
//   },
];

export default routes;
